//@ts-check

import React, { useEffect, useState } from "react";
import "./otp-payment.css";
import firebase from "../../firebase";
import logo from "../../assets/logo.svg";
import auth_flower from "../../assets/auth_flower.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { queryExchange } from "../../functionality/utils";

function OtpPayment({ match }) {
  const [curuser, setCuruser] = useState("No user is logged in");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [button, setButton] = useState(true);

  useEffect(() => {
    console.log(match.params.id);
    if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "seller"
    ) {
      window.location = "/seller-home";
    } else if (
      localStorage.getItem("userType") === null ||
      localStorage.getItem("userType") === undefined
    ) {
      window.location = "/";
    }
  }, []);

  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  // verify if a user is already logged in
  useEffect(() => {
    verify();
  }, []);

  // function to verify the user session
  const verify = async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setCuruser(user.uid);
        setPhone(user.phoneNumber);
        // TODO: check if the logged in user is a seller or buyer and route accordingly
      } else {
        setCuruser("No user found");
      }
    });
  };

  // invisibly checks if user is human
  const setupCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "auth-signin-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved
          verifyPhone();
        },
        defaultCountry: "IN",
      }
    );
  };

  // function that sends otp
  const verifyPhone = async (e) => {
    setupCaptcha();
    let phoneNumber = localStorage.getItem("phone");
    if (phoneNumber[0] != "+") phoneNumber = "+91" + phoneNumber;
    const appVerifier = window.recaptchaVerifier;

    // sending the OTP
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // SMS sent
        window.confirmationResult = confirmationResult;
        console.log("OTP is sent to " + phoneNumber);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  verifyPhone();

  // function signs in the user
  const verifyOtp = () => {
    let otpInput = otp;
    let otpConfirm = window.confirmationResult;
    otpConfirm
      .confirm(otpInput)
      .then(async function(result) {
        // User signed in successfully.
        console.log("Successful log in");
        if (
          localStorage.getItem("items") === "empty" ||
          localStorage.getItem("items") === null ||
          localStorage.getItem("items") === undefined
        ) {
          toast.error("Please add items to cart before proceeding to payment", {
            position: toast.POSITION.TOP_RIGHT,
          });
          window.location.href = "/buyer-home";
        }
        var items = JSON.parse(localStorage.getItem("items"));
        console.log(items);
        toast.info("Checking availability of your items...", {
          position: toast.POSITION.TOP_RIGHT,
        });
        var query = `SELECT id FROM "buyers" WHERE phone_number = '${localStorage.getItem(
          "phone"
        )}'`;
        var response = await queryExchange(query);
        const buyerId = response.rows[0].id;
        const addressId = match.params.address_id;

        var total = 0;
        var sellers = [];
        var inItems = "";
        for (var i = 0; i < items.length; i++) {
          inItems += items[i].id + ",";
          total += parseFloat(items[i].price);
          sellers.push({
            id: items[i].seller_id,
            price: parseFloat(items[i].price),
          });
        }
        inItems = inItems.slice(0, -1);
        inItems = "(" + inItems + ")";
        var query = `SELECT * FROM "products" WHERE id IN ${inItems}`;
        response = await queryExchange(query);
        var products = response.rows;
        for (var i = 0; i < products.length; i++) {
          if (products[i].left_in_stock < items[i].quantity) {
            localStorage.setItem("items", "empty");
            alert("Not enough stock for product " + products[i].name);
            window.location.href = "/buyer-cart";
          }
        }
        toast.info("Running the transaction...", {
          position: toast.POSITION.TOP_RIGHT,
        });

        // start transaction
        query = `BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSAVEPOINT begin_save_point;\n`;
        response = await queryExchange(query);

        var timestamp = new Date().toISOString();
        var arrivalTime = addDays(timestamp, 4).toISOString();
        var paymentMethod = match.params.id === "0" ? "card" : "wallet";
        var orderId;
        await queryExchange(
          `INSERT INTO "orders"("user_id", "status", "created_at", "arriving_on", "order_total", "billing_address", "payment_method") VALUES (${buyerId}, ('on_the_way'), '${timestamp}', '${arrivalTime}', ${total}, ${addressId}, ('${paymentMethod}'));\n`
        );
        response = await queryExchange(
          `SELECT id FROM "orders" WHERE user_id = ${buyerId} AND created_at = '${timestamp}'`
        );
        orderId = response.rows[0].id;
        items.forEach((element, index) => {
          query += `INSERT INTO "order_items"("order_id", "product_id", "quantity") VALUES (${orderId}, ${element.id}, ${element.quantity});\n`;
        });
        if (match.params.id === "1") {
          query += `UPDATE "buyers" SET wallet_balance = wallet_balance - ${total} WHERE id = ${buyerId};\n`;
        }
        sellers.forEach((element, index) => {
          query += `UPDATE "sellers" SET account_balance = account_balance + ${element.price} WHERE id = ${element.id};\n`;
        });
        items.forEach((element, index) => {
          query += `UPDATE "products" SET left_in_stock = left_in_stock - ${element.quantity} WHERE id = ${element.id};\n`;
        });
        query += `DELETE FROM "cart_items" WHERE user_id = ${buyerId};\n`;
        query += `COMMIT;`;
        response = await queryExchange(query);
        console.log(query);
        if (response.name && response.name === "error") {
          toast.error("Transaction failed. Rolling back...", {
            position: toast.POSITION.TOP_RIGHT,
          });
          await queryExchange(`ROLLBACK TO begin_save_point;`);
          window.location.href = "/buyer-home";
        } else {
          toast.success("Transaction successful.", {
            position: toast.POSITION.TOP_RIGHT,
          });
          localStorage.setItem("items", "empty");
          setTimeout(() => {
            window.location.href = "/buyer-orders";
          }, 1000);
        }
      })
      .catch(async function(error) {
        console.log(error);
        toast.error("Transaction failed. Rolling back...", {
          position: toast.POSITION.TOP_RIGHT,
        });
        localStorage.setItem("items", "empty");
        await queryExchange(`ROLLBACK TO begin_save_point;`);
        window.location.href = "/buyer-home";
      });
    verify();
  };

  return (
    <div className="auth-page" style={{ overflow: "hidden" }}>
      <div className="auth-page-strip"></div>
      <div className="auth-page-content">
        <div className="auth-page-left">
          <img src={logo} className="auth-page-logo" />
          <img src={auth_flower} className="auth-page-flower" />
        </div>
        <div className="auth-page-right">
          <div style={{ textAlign: "center", marginTop: "20%" }}>
            <Space direction="vertical">
              <div
                style={{
                  textAlign: "center",
                  paddingLeft: "30%",
                  paddingRight: "30%",
                }}
              >
                An OTP has been sent to your registered mobile number. To
                confirm payment,
              </div>
              <div className="auth-page-welcome-text">Enter the OTP</div>
              <Input.Password
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "200px" }}
              />
            </Space>
            <br></br>
            <br></br>
            <ToastContainer autoClose={5000} />
            <button
              className="auth-page-button"
              id="auth-signin-button"
              style={{ backgroundColor: "#edafb8" }}
              onClick={(e) => {
                verifyOtp();
              }}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpPayment;

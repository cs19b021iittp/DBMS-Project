//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-signup.css";
import firebase from "../../firebase";
import logo from "../../assets/logo.svg";
import auth_flower from "../../assets/auth_flower.svg";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { queryExchange } from "../../functionality/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var aesjs = require("aes-js");

function AuthenticationPage({ match }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setPhone(localStorage.getItem("phone"));
  });

  var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="buyer-page" style={{ overflow: "hidden" }}>
      <div className="buyer-page-content">
        <div className="buyer-page-left">
          <img src={logo} className="buyer-page-logo" />
          <img src={auth_flower} className="buyer-page-flower" />
        </div>
        <div className="buyer-page-middle">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <div className="buyer-page-text">First Name</div>
            <Input
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">Last Name</div>
            <Input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">Address Line 1</div>
            <Input
              placeholder="Address Line 1"
              onChange={(e) => setAddress1(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">Address Line 2</div>
            <Input
              placeholder="Address Line 2"
              onChange={(e) => setAddress2(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">City</div>
            <Input
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">Pincode</div>
            <Input
              placeholder="Pincode"
              onChange={(e) => setPincode(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">Country</div>
            <Input
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <br></br>
            <br></br>
          </div>
        </div>

        <div className="buyer-page-right">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <div className="buyer-page-text">Name on Card</div>
            <Input
              placeholder="Name on Card"
              onChange={(e) => setCardName(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">Card Number</div>
            <Input
              placeholder="Card Number"
              onChange={(e) => setCardNumber(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div className="buyer-page-text">CVV</div>
            <Input
              placeholder="CVV"
              onChange={(e) => setCvv(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <div style={{ height: "35vh" }}></div>
            <ToastContainer autoClose={5000} />
            <button
              className="buyer-page-button"
              id="buyer-signin-button"
              style={{ backgroundColor: "#edafb8" }}
              onClick={async (e) => {
                if (
                  firstName === "" ||
                  lastName === "" ||
                  address1 === "" ||
                  address2 === "" ||
                  city === "" ||
                  pincode === "" ||
                  country === "" ||
                  cardName === "" ||
                  cardNumber === "" ||
                  cvv === ""
                ) {
                  toast.error("Please fill all the fields"),
                    {
                      position: toast.POSITION.TOP_RIGHT,
                    };
                } else {
                  if (cardNumber.length !== 16) {
                    toast.error("Please enter a valid card number"),
                      {
                        position: toast.POSITION.TOP_RIGHT,
                      };
                    return;
                  }
                  var text = cvv;
                  var textBytes = aesjs.utils.utf8.toBytes(text);
                  var aesCtr = new aesjs.ModeOfOperation.ctr(
                    key,
                    new aesjs.Counter(5)
                  );
                  var encryptedBytes = aesCtr.encrypt(textBytes);
                  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

                  toast.info("Creating records...", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                  var query = `INSERT INTO "buyers"("phone_number", "first_name", "last_name", "wallet_balance") VALUES ('${phone}', '${firstName}', '${lastName}', 5000.1);`;
                  await queryExchange(query);

                  query = `SELECT id FROM "buyers" WHERE phone_number = '${phone}'`;
                  var userId = await queryExchange(query);
                  userId = userId.rows[0].id;

                  localStorage.setItem("user_id", userId);

                  toast.info("Maintaining referential integrity...", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                  query = `INSERT INTO "addresses"("user_id", "address_line1", "address_line2", "city", "pincode", "country") VALUES (${userId}, '${address1}', '${address2}', '${city}', '${pincode}', '${country}');`;
                  await queryExchange(query);

                  query = `INSERT INTO "payment_cards"("user_id", "name_on_card", "card_number", "cvv") VALUES (${userId}, '${cardName}', '${cardNumber}', '${encryptedHex}');`;
                  await queryExchange(query);

                  window.location.href = "/buyer-home";
                }
              }}
            >
              Sign Up
            </button>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;

//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-account-page.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";
import sofa from "../../assets/sofa.svg";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "antd";
import { queryExchange } from "../../functionality/utils";

const BuyerAccountPage = () => {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [buyerId, setBuyerId] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "seller"
    ) {
      window.location.href = "/seller-home";
    } else if (
      localStorage.getItem("userType") === null ||
      localStorage.getItem("userType") === undefined
    ) {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    async function fetchDetails() {
      toast.info("Getting your account details...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var query = `SELECT * FROM "buyers" WHERE phone_number = '${localStorage.getItem(
        "phone"
      )}'`;
      var id = await queryExchange(query);
      setBuyerId(id.rows[0].id);
      setBalance(id.rows[0].wallet_balance);
      setFirstName(id.rows[0].first_name);
      setLastName(id.rows[0].last_name);

      query = `SELECT * FROM "addresses" WHERE user_id = '${id.rows[0].id}'`;
      var tempAddresses = await queryExchange(query);
      setAddresses(tempAddresses.rows);

      query = `SELECT name_on_card, card_number FROM "payment_cards" WHERE user_id = '${id.rows[0].id}'`;
      var tempCards = await queryExchange(query);
      setNameOnCard(tempCards.rows[0].name_on_card);
      setCardNumber(tempCards.rows[0].card_number);
    }

    fetchDetails();
  }, []);

  const addAmount = async () => {
    if (amount <= 0) {
      toast.error("Please enter a valid amount", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    var query = `UPDATE "buyers" SET wallet_balance = wallet_balance + ${amount} WHERE id = '${buyerId}'`;
    const response = await queryExchange(query);
    if (response.name && response.name === "error") {
      console.log(response);
      toast.error("An error occured", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success("Added amount successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      const total = parseFloat(balance) + parseFloat(amount);
      setBalance(total);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <div
          className="left-panel"
          style={{
            textAlign: "left",
            backgroundColor: "#dedbd2",
            padding: "20px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Billing Addresses
          </div>
          <div style={{ marginTop: "20px" }}>
            {addresses.map((address) => (
              <div>
                <div>Billing Address {addresses.indexOf(address) + 1}</div>
                <div>{address.address_line1}</div>
                <div>{address.address_line2}</div>
                <div>{address.city}</div>
                <div>{address.pincode}</div>
                <div>{address.country}</div>
              </div>
            ))}
          </div>
          <button
            className="button-account"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
        <div className="mid-panel" style={{ padding: "40px" }}>
          <div style={{ fontWeight: "bold", fontSize: "2em" }}>
            Your current TsunamiDeal Balance
          </div>
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Rs. {balance}
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.8em" }}>Add amount to wallet</div>
              <Input
                onChange={(e) => setAmount(e.target.value)}
                style={{ width: "180px" }}
              />
            </div>
            <ToastContainer autoClose={5000} />
            <div style={{ flex: 1 }}>
              <button className="button-account-amount" onClick={addAmount}>
                Add Amount
              </button>
            </div>
          </div>
          <br></br>
          <br></br>
          <div style={{ fontSize: "1.5em" }}>First Name: {firstName}</div>
          <div style={{ fontSize: "1.5em" }}>Last Name: {lastName}</div>
          <div style={{ fontSize: "1.5em" }}>
            +91 {localStorage.getItem("phone")}
          </div>
          <br></br>
          <div style={{ fontSize: "1.5em" }}>Name on card: {nameOnCard}</div>
          <div style={{ fontSize: "1.5em" }}>Card Number Ending In</div>
          <div style={{ fontSize: "1.5em" }}>
            XXXX XXXX XXXX {cardNumber.slice(12, 17)}
          </div>
        </div>
        <div className="right-panel">
          {/* <img src={flower} style={{ width: "100%" }}></img> */}
        </div>
      </div>
    </div>
  );
};

export default BuyerAccountPage;

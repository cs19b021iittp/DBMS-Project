//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-account-page.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";
import sofa from "../../assets/sofa.svg";
import { useLocation } from "react-router-dom";
import { Input } from "antd";

const BuyerAccountPage = () => {
  const [amount, setAmount] = useState(0);

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
          <button className="button-account">Logout</button>
        </div>
        <div className="mid-panel" style={{ padding: "40px" }}>
          <div style={{ fontWeight: "bold", fontSize: "2em" }}>
            Your current TsunamiDeal Balance
          </div>
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>Rs. 4500</div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.8em" }}>Add amount to wallet</div>
              <Input
                onChange={(e) => setAmount(e.target.value)}
                style={{ width: "180px" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <button className="button-account-amount">Add Amount</button>
            </div>
          </div>
          <br></br>
          <br></br>
          <div style={{ fontSize: "1.5em" }}>First Name</div>
          <div style={{ fontSize: "1.5em" }}>Last Name</div>
          <div style={{ fontSize: "1.5em" }}>+919876543210</div>
          <br></br>
          <div style={{ fontSize: "1.5em" }}>Name on card</div>
          <div style={{ fontSize: "1.5em" }}>Card Number Ending In</div>
          <div style={{ fontSize: "1.5em" }}>XXXX XXXXX XXXX 1234</div>
        </div>
        <div className="right-panel">
          <img src={flower} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default BuyerAccountPage;

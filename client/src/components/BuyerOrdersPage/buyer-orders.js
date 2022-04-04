//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-orders.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";

const OrderCard = (props) => {
  return (
    <div className="order-card">
      <div className="order-card-content">
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>Unit Price After Discount = Rs. {props.finalPrice}</div>
      </div>
      <button className="order-card-button">Remove</button>
    </div>
  );
};

const BuyerOrdersPage = () => {
  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <div
          className="left-panel-orders"
          style={{
            textAlign: "left",
            backgroundColor: "#dedbd2",
            padding: "20px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Orders Tracking
          </div>
        </div>
        <div className="middle-panel-orders">
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Arrived Items
          </div>
        </div>
        <div className="right-panel">
          <img src={flower} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default BuyerOrdersPage;

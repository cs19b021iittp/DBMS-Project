//@ts-check

import React, { useEffect, useState } from "react";
import "./cart-page.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";
import sofa from "../../assets/sofa.svg";
import { useLocation } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card-cart">
      <div className="card-cart-image">
        <img src={props.image} style={{ height: "80px" }} />
      </div>
      <div className="card-cart-content">
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>Unit Price After Discount = Rs. {props.finalPrice}</div>
      </div>
      <button className="card-cart-button">Remove</button>
    </div>
  );
};

const CartPage = () => {
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
            Billing Details
          </div>
          <div className="table-cart">
            <table>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <tr>
                <td>Sofa</td>
                <td>1</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Sofa</td>
                <td>1</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Sofa</td>
                <td>1</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Sofa</td>
                <td>1</td>
                <td>1000</td>
              </tr>
            </table>
          </div>
          <br></br>
          <br></br>
          <div className="billing-details">
            <div style={{ fontSize: "1.2em" }}>Total Amount: </div>
            <div style={{ fontSize: "1.2em" }}>Expected Delivery: </div>
          </div>
        </div>
        <div className="mid-panel">
          <div>
            <Card name="Sofa" image={sofa} finalPrice="1000" />
          </div>
          <div>
            <Card name="Sofa" image={sofa} finalPrice="1000" />
          </div>
          <div>
            <Card name="Sofa" image={sofa} finalPrice="1000" />
          </div>
          <div>
            <Card name="Sofa" image={sofa} finalPrice="1000" />
          </div>
        </div>
        <div className="right-panel">
          <div className="proceed-button">
            <button className="proceed-button-act">Proceed to Pay</button>
          </div>
          <img src={flower} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

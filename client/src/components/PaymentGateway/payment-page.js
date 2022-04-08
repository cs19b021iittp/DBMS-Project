// @ts-check

import React, { useEffect, useState } from "react";
import "./payment-page.css";
import { Radio } from "antd";
import { Input } from "antd";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const [address, setAddress] = useState("address1");
  const [cvv, setCvv] = useState("");

  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <div className="payment-page">
        <div className="left-panel-payment">
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>
            Choose an Address
          </div>
          <div style={{ height: "50px" }}></div>
          <Radio.Group onChange={changeAddress} value={address}>
            <Radio value={"address1"}>
              Billing Address 1 First Name Last Name Address Line 1 Address Line
              2 City Pincode Country Phone Number
            </Radio>
            <Radio value={"address2"}>
              Billing Address 2 First Name Last Name Address Line 1 Address Line
              2 City Pincode Country Phone Number
            </Radio>
          </Radio.Group>
        </div>
        <div className="mid-panel-payment">
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>
            Billing Details
          </div>
          <br></br>
          <br></br>
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
        <div className="right-panel-payment">
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>
            Choose a Payment Method
          </div>
          <div style={{ fontSize: "1.5em" }}>Rs. 7600</div>
          <br></br>
          <br></br>
          <div className="td-account">
            <div style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              TsunamiDeal Account
            </div>
            <div style={{ fontSize: "1.2em" }}>Your wallet balance: </div>
            <button className="btn-account">Pay</button>
          </div>
          <br></br>
          <br></br>
          <div className="td-account" style={{ backgroundColor: "#f7e1d7" }}>
            <div style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              Credit/Debit Card
            </div>
            <div style={{ fontSize: "1.2em" }}>Name on Card: </div>
            <div style={{ fontSize: "1.2em" }}>Card Number Ending In: </div>
            <div style={{ fontSize: "1.2em" }}>
              Enter CVV{" "}
              <Input
                onChange={(e) => setCvv(e.target.value)}
                style={{ width: "150px", borderRadius: "4px" }}
              ></Input>
            </div>
            <button
              className="btn-account"
              style={{ backgroundColor: "#edafb8" }}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

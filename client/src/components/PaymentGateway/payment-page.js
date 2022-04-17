// @ts-check

import React, { useEffect, useState } from "react";
import "./payment-page.css";
import { Radio } from "antd";
import { Input } from "antd";
import { useLocation } from "react-router-dom";
import { queryExchange } from "../../functionality/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var aesjs = require("aes-js");

const PaymentPage = () => {
  const location = useLocation();
  const [address, setAddress] = useState(0);
  const [cvv, setCvv] = useState("");
  const [inputCvv, setInputCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [balance, setBalance] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [arrival, setArrival] = useState("");
  const [addressId, setAddressId] = useState(0);

  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

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

  var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  useEffect(() => {
    async function getDetails() {
      toast.info("Getting your details...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var query = `SELECT wallet_balance FROM "buyers" WHERE "id" = ${location.state.buyer_id}`;
      var tempBalance = await queryExchange(query);
      setBalance(tempBalance.rows[0].wallet_balance);

      query = `SELECT * FROM "payment_cards" WHERE "user_id" = ${location.state.buyer_id}`;
      var result = await queryExchange(query);
      setNameOnCard(result.rows[0].name_on_card);
      setCvv(result.rows[0].cvv);
      setCardNumber(result.rows[0].card_number.slice(12, 17));

      query = `SELECT * FROM "addresses" WHERE "user_id" = ${location.state.buyer_id}`;
      result = await queryExchange(query);
      setAddresses(result.rows);
      setAddressId(result.rows[0].id);
    }
    setArrival(addDays(new Date(), 4).toDateString());
    getDetails();
  }, []);

  const changeAddress = (e) => {
    setAddress(e.target.value);
    setAddressId(addresses.get(e.target.value).id);
    console.log(addresses.get(e.target.value).id);
  };

  const tsunamiDealAccountPay = () => {
    if (location.state.total > balance) {
      toast.error("Insufficient balance", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    var sendItems = [];
    // location.state.items.map((item) => {
    //   sendItems.push(item.id);
    // });
    var items = JSON.stringify(location.state.items);
    localStorage.setItem("items", items);
    window.location.href = "/otp-payment/1/" + addressId;
  };

  const cardPay = () => {
    var text = inputCvv;
    var textBytes = aesjs.utils.utf8.toBytes(text);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    if (encryptedHex !== cvv) {
      toast.error("Incorrect CVV", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    var sendItems = [];
    // location.state.items.map((item) => {
    //   sendItems.push(item);
    // });
    var items = JSON.stringify(location.state.items);
    localStorage.setItem("items", items);
    window.location.href = "/otp-payment/0/" + addressId;
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
            {addresses.map((address) => (
              <Radio value={addresses.indexOf(address)}>
                <div>{address.address_line1}</div>
                <div>{address.address_line2}</div>
                <div>{address.city}</div>
                <div>{address.pincode}</div>
                <div>{address.country}</div>
              </Radio>
            ))}
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
              <th style={{ paddingRight: "150px" }}>Item Name</th>
              <th style={{ paddingRight: "20px" }}>Quantity</th>
              <th style={{ paddingRight: "10px" }}>Price</th>
              {location.state.items.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <br></br>
          <br></br>
          <div className="billing-details">
            <div style={{ fontSize: "1.2em" }}>
              Total Amount: {location.state.total}
            </div>
            <div style={{ fontSize: "1.2em" }}>
              Expected Delivery: {arrival}
            </div>
          </div>
        </div>
        <div className="right-panel-payment">
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>
            Choose a Payment Method
          </div>
          <div style={{ fontSize: "1.5em" }}>
            Pay Rs. {location.state.total}
          </div>
          <br></br>
          <br></br>
          <div className="td-account">
            <div style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              TsunamiDeal Account
            </div>
            <div style={{ fontSize: "1.2em" }}>
              Your wallet balance: {balance}
            </div>
            <button className="btn-account" onClick={tsunamiDealAccountPay}>
              Pay
            </button>
          </div>
          <br></br>
          <br></br>
          <div className="td-account" style={{ backgroundColor: "#f7e1d7" }}>
            <div style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              Credit/Debit Card
            </div>
            <div style={{ fontSize: "1.2em" }}>Name on Card: {nameOnCard}</div>
            <div style={{ fontSize: "1.2em" }}>
              Card Number Ending In: {cardNumber}
            </div>
            <div style={{ fontSize: "1.2em" }}>
              Enter CVV{" "}
              <Input
                onChange={(e) => setInputCvv(e.target.value)}
                style={{ width: "150px", borderRadius: "4px" }}
              ></Input>
            </div>
            <ToastContainer autoClose={5000} />
            <button
              className="btn-account"
              onClick={cardPay}
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

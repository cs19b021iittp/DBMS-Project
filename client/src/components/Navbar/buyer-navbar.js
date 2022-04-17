//@ts-check

import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import orders from "../../assets/orders.svg";
import "./navbar.css";
import { Input, Space } from "antd";
import { searchFunction } from "../../functionality/search.js";
import "antd/dist/antd.css";

const BuyerNavbar = () => {
  const [searchValue, setSearchText] = useState("");

  return (
    <div className="buyer-navbar">
      <span className="buyer-navbar-logo">
        <img src={logo} alt="logo" style={{ width: "20%" }} />
      </span>
      <span className="buyer-navbar-searchbar">
        <div style={{ height: "10px" }}></div>
        <Input
          placeholder="Search for items"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          style={{
            height: "40px",
            width: "50%",
            borderRadius: "20px",
          }}
        />
        <img
          onClick={(e) => {
            searchFunction(searchValue);
          }}
          src={search}
          style={{ height: "30px", marginLeft: "10px", cursor: "pointer" }}
        />
      </span>
      <span className="buyer-navbar-icons">
        <span>
          <img
            onClick={() => {
              window.location.href = "/buyer-account";
            }}
            src={user}
            alt="logo"
            style={{ width: "10%", marginLeft: "15%", cursor: "pointer" }}
          />
          <img
            onClick={() => {
              window.location.href = "/buyer-cart";
            }}
            src={cart}
            alt="logo"
            style={{ width: "10%", marginLeft: "15%", cursor: "pointer" }}
          />
          <img
            onClick={() => {
              window.location.href = "/buyer-orders";
            }}
            src={orders}
            alt="logo"
            style={{ width: "10%", marginLeft: "15%", cursor: "pointer" }}
          />
        </span>
      </span>
    </div>
  );
};

export default BuyerNavbar;

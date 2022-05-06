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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyerNavbar = () => {
  const [searchValue, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(sessionStorage.getItem("search_query"));
  }, []);

  return (
    <div className="buyer-navbar">
      <div className="buyer-navbar-logo" style={{ flex: 0.2 }}>
        <img src={logo} alt="logo" style={{ width: "20%" }} />
      </div>
      <ToastContainer autoClose={2000} />
      <div className="buyer-navbar-searchbar" style={{ flex: 0.5 }}>
        <div style={{ height: "10px" }}></div>
        <Input
          placeholder="Search for items"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchValue}
          style={{
            height: "40px",
            width: "80%",
            borderRadius: "20px",
          }}
        />

        <img
          onClick={async (e) => {
            toast.info("Searching...", {
              position: toast.POSITION.TOP_RIGHT,
            });
            sessionStorage.setItem("search_query", searchValue);
            await searchFunction(
              searchValue,
              JSON.parse(localStorage.getItem("categories")),
              JSON.parse(localStorage.getItem("brands")),
              parseInt(localStorage.getItem("price")),
              localStorage.getItem("sortPrice")
            );
            window.location.href = "/buyer-home";
          }}
          src={search}
          style={{ height: "30px", marginLeft: "10px", cursor: "pointer" }}
        />
      </div>
      <div className="buyer-navbar-icons" style={{ flex: 0.3 }}>
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
      </div>
    </div>
  );
};

export default BuyerNavbar;

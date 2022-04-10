//@ts-check

import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import "./navbar.css";
import { Input, Space } from "antd";
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
            fetch("/api/query", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query: 'select * from "buyers"',
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                // for select, data.fields gives the column details,
                // data.rows gives the list of rows, each list item
                // is an object that contains column name as the key and
                // cell value as the value
                console.log(data);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          src={search}
          style={{ height: "30px", marginLeft: "10px", cursor: "pointer" }}
        />
      </span>
      <span className="buyer-navbar-icons">
        <div>
          <img
            src={user}
            alt="logo"
            style={{ width: "15%", marginLeft: "20%", cursor: "pointer" }}
          />
          <img
            src={cart}
            alt="logo"
            style={{ width: "15%", marginLeft: "15%", cursor: "pointer" }}
          />
        </div>
      </span>
    </div>
  );
};

export default BuyerNavbar;

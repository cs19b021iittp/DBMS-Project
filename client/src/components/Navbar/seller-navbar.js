//@ts-check

import React from "react";
import logo from "../../assets/logo.svg";
import upload from "../../assets/upload.svg";
import menu from "../../assets/menu.svg";
import "./navbar.css";

const SellerNavbar = () => {
  return (
    <div className="buyer-navbar">
      <span className="buyer-navbar-logo">
        <img src={logo} alt="logo" style={{ width: "20%" }} />
      </span>

      <span className="buyer-navbar-icons" style={{ marginTop: "15px" }}>
        <div>
          <img
            onClick={() => {
              window.location.href = "/seller-home";
            }}
            src={upload}
            alt="logo"
            style={{ width: "8%", marginLeft: "25%", cursor: "pointer" }}
          />
          <img
            onClick={() => {
              window.location.href = "/seller-update";
            }}
            src={menu}
            alt="logo"
            style={{ width: "8%", marginLeft: "5%", cursor: "pointer" }}
          />
        </div>
      </span>
    </div>
  );
};

export default SellerNavbar;

//@ts-check

import React from "react";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
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
            src={user}
            alt="logo"
            style={{ width: "15%", marginLeft: "20%", cursor: "pointer" }}
          />
          <img
            src={menu}
            alt="logo"
            style={{ width: "15%", marginLeft: "15%", cursor: "pointer" }}
          />
        </div>
      </span>
    </div>
  );
};

export default SellerNavbar;

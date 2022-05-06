//@ts-check

import React, { useEffect } from "react";
import "./landing-page.css";
import logo from "../../assets/logo.svg";
import auth_flower from "../../assets/auth_flower.svg";
import welcome_text from "../../assets/welcome_text.svg";

export const LandingPage = () => {
  // localStorage.clear();
  // sessionStorage.clear();

  useEffect(() => {
    localStorage.setItem(
      "categories",
      JSON.stringify(["furniture", "lighting", "plants", "show_pieces"])
    );
    localStorage.setItem(
      "brands",
      JSON.stringify(["home_centre", "ddecor", "stylestop"])
    );
    localStorage.setItem("price", "0");
    localStorage.setItem("sortPrice", "");
    sessionStorage.setItem("search_results", "[]");
    sessionStorage.setItem("search_query", "");
    if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "seller"
    ) {
      window.location = "/seller-home";
    } else if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "buyer"
    ) {
      window.location = "/buyer-home";
    }
  }, []);

  return (
    <div className="landing-page" style={{ overflow: "hidden" }}>
      <div className="landing-page-strip"></div>
      <div className="landing-page-content">
        <div className="landing-page-left">
          <img src={logo} className="landing-page-logo" />
          <img src={auth_flower} className="landing-page-flower" />
        </div>
        <div className="landing-page-right">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <img src={welcome_text} className="landing-page-welcome-text" />
            <br></br>
            <br></br>
            <br></br>
            <button
              className="landing-page-button"
              style={{ backgroundColor: "#edafb8" }}
              onClick={() => {
                window.location.href = "/auth/0"; // 0 is the id of the buyer
              }}
            >
              Buyer Login
            </button>
            <br></br>
            <br></br>
            <button
              className="landing-page-button"
              style={{ backgroundColor: "#f7e1d7" }}
              onClick={() => {
                window.location.href = "/auth/1"; // 1 is the id of the seller
              }}
            >
              Seller Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

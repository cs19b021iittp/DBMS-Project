//@ts-check

import React, { useEffect, useState } from "react";
import "./seller-signup.css";
import firebase from "../../firebase";
import logo from "../../assets/logo.svg";
import auth_flower from "../../assets/auth_flower.svg";
import { Input, Space } from "antd";
import "antd/dist/antd.css";

function AuthenticationPage({ match }) {
  {/*const [curuser, setCuruser] = useState("No user is logged in");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [button, setButton] = useState(true);

  useEffect(() => {
    if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "seller"
    ) {
      window.location = "/seller-dashboard";
    } else if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "buyer"
    ) {
      window.location = "/buyer-dashboard";
    }
  }, []);

  // verify if a user is already logged in
  useEffect(() => {
    verify();
  }, []);

  // function to verify the user session
  const verify = async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setCuruser(user.uid);
        setPhone(user.phoneNumber);
        // TODO: check if the logged in user is a seller or buyer and route accordingly
      } else {
        setCuruser("No user found");
      }
    });
  };*/}

  return (
    <div className="seller-page" style={{ overflow: "hidden" }}>
      <div className="seller-page-strip"></div>
      <div className="seller-page-content">
        <div className="seller-page-left">
          <img src={logo} className="seller-page-logo" />
          <img src={auth_flower} className="seller-page-flower" />
        </div>
        <div className="seller-page-right">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <div className="seller-page-welcome-text">
               Name
            </div>
              <Input
                placeholder="Name"
                //onChange={(e) => setPhone(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
            <br></br>
            <br></br>
            <button
              className="seller-page-button"
              id="seller-signin-button"
              style={{ backgroundColor: "#edafb8" }}
              
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;

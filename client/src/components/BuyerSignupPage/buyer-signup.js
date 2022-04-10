//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-signup.css";
import firebase from "../../firebase";
import logo from "../../assets/logo.svg";
import auth_flower from "../../assets/auth_flower.svg";
import { Input, Space } from "antd";
import "antd/dist/antd.css";

function AuthenticationPage({ match }) {
  /*const [curuser, setCuruser] = useState("No user is logged in");
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
  };*/ 

  return (
    <div className="auth-page" style={{ overflow: "hidden" }}>
      {/*<div className="auth-page-strip"></div>
      <div className="auth-page-content">
        <div className="auth-page-left">
          <img src={logo} className="auth-page-logo" />
          <img src={auth_flower} className="auth-page-flower" />
        </div>
        <div className="auth-page-right">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <div className="auth-page-welcome-text">
              Enter your Phone Number
            </div>
            <Space direction="vertical">
              <Input
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="auth-page-welcome-text">Enter the OTP</div>
              <Input.Password
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "200px" }}
              />
            </Space>
            <br></br>
            <br></br>
            <button
              className="auth-page-button"
              id="auth-signin-button"
              style={{ backgroundColor: "#edafb8" }}
              onClick={(e) => {
                if (button) {
                  if (phone.length === 10) {
                    verifyPhone(e);
                    setButton(false);
                  } else {
                    alert("Please enter a valid phone number");
                  }
                } else {
                  verifyOtp(e);
                }
              }}
            >
              {button ? "Get OTP" : "Verify OTP"}
            </button>
          </div>
        </div>
            </div>*/}
    </div>
  );
}

export default AuthenticationPage;





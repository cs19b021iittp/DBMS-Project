//@ts-check

import React, { useEffect, useState } from "react";
import "./authentication.css";
import firebase from "../../firebase";
import logo from "../../assets/logo.svg";
import auth_flower from "../../assets/auth_flower.svg";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";

function AuthenticationPage({ match }) {
  const [curuser, setCuruser] = useState("No user is logged in");
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
  };

  // invisibly checks if user is human
  const setupCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "auth-signin-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved
          verifyPhone();
        },
        defaultCountry: "IN",
      }
    );
  };

  // function that sends otp
  const verifyPhone = async (e) => {
    setupCaptcha();
    // let phoneNumber = phone;
    let phoneNumber = "9876543210";
    if (phoneNumber[0] != "+") phoneNumber = "+91" + phoneNumber;
    setPhone(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    // sending the OTP
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent
        window.confirmationResult = confirmationResult;
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // function signs in the user
  const verifyOtp = (e) => {
    e.preventDefault();
    let otpInput = otp;
    let otpConfirm = window.confirmationResult;
    otpConfirm
      .confirm(otpInput)
      .then(async function (result) {
        // User signed in successfully.
        console.log("Successful log in");
        localStorage.setItem(
          "userType",
          match.params.id === "0" ? "buyer" : "seller"
        );
        window.location =
          match.params.id === "0" ? "/buyer-dashboard" : "/seller-dashboard";
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
    verify();
  };

  return (
    <div className="auth-page" style={{ overflow: "hidden" }}>
      <div className="auth-page-strip"></div>
      <div className="auth-page-content">
        <div className="auth-page-left">
          <img src={logo} className="auth-page-logo" />
          <img src={auth_flower} className="auth-page-flower" />
        </div>
        <div className="auth-page-right">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <div className="auth-page-welcome-text">Enter the OTP</div>
            <br></br>
            <Space direction="vertical">
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
                  verifyPhone(e);
                  setButton(false);
                } else {
                  verifyOtp(e);
                }
              }}
            >
              {button ? "Get OTP" : "Verify OTP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;

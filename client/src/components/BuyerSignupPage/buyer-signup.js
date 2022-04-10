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
    <div className="buyer-page" style={{ overflow: "hidden" }}>
      <div className="buyer-page-strip"></div>
      <div className="buyer-page-content">
        <div className="buyer-page-left">
          <img src={logo} className="buyer-page-logo" />
          <img src={auth_flower} className="buyer-page-flower" />
        </div>
        <div className="buyer-page-middle">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <div className="buyer-page-welcome-text">
              First Name
            </div>
              <Input
                placeholder="First Name"
               // onChange={(e) => setfname(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              Last Name
            </div>
              <Input
                placeholder="Last Name"
                //onChange={(e) => setlname(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              Address Line 1
            </div>  
              <Input
                placeholder="Address Line 1"
               // onChange={(e) => setaddline1(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              Address Line 2
            </div>   
              <Input
                placeholder="Address Line 2"
                //onChange={(e) => setaddline2(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              City
            </div>
              <Input
                placeholder="City"
                //onChange={(e) => setcity(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              Pincode
            </div>
              <Input
                placeholder="Pincode"
                //onChange={(e) => setpincode(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              Country
            </div>
              <Input
                placeholder="Country"
                //onChange={(e) => setcountry(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
            <br></br>
            <br></br>
            </div>
        </div>

        <div className="buyer-page-right">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
              <div className="buyer-page-welcome-text">
              Name on Card
            </div>
              <Input
                placeholder="Name on Card"
                //onChange={(e) => setnameoncard(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              Card Number
            </div>
              <Input
                placeholder="Card Number"
                //onChange={(e) => setcardnumber(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
              <div className="buyer-page-welcome-text">
              CVV
            </div>
              <Input
                placeholder="CVV"
                //onChange={(e) => setcvv(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "218px" }}
              />
               <button
              className="buyer-page-button"
              id="buyer-signin-button"
              style={{ backgroundColor: "#edafb8" }}
              /*onClick={(e) => {
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
              }}*/
            >
              Sign Up
            </button>
            <br></br>
            <br></br>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;





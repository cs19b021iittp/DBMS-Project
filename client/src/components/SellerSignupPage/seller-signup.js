//@ts-check

import React, { useEffect, useState } from "react";
import "./seller-signup.css";
import firebase from "../../firebase";
import logo from "../../assets/logo.svg";
import auth_flower from "../../assets/auth_flower.svg";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryExchange } from "../../functionality/utils";

function AuthenticationPage({ match }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setPhone(localStorage.getItem("phone"));
  });

  return (
    <div className="seller-page" style={{ overflow: "hidden" }}>
      <div className="seller-page-strip"></div>
      <div className="seller-page-content">
        <div className="seller-page-left">
          <div style={{ width: "100%" }}>
            <img src={logo} className="seller-page-logo" />
          </div>
          <img src={auth_flower} className="seller-page-flower" />
        </div>
        <div className="seller-page-right">
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <div className="seller-page-welcome-text">Name</div>
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              style={{ borderRadius: "5px", height: "40px", width: "300px" }}
            />
            <br></br>
            <br></br>
            <ToastContainer autoClose={5000} />
            <button
              className="seller-page-button"
              id="seller-signin-button"
              style={{ backgroundColor: "#edafb8" }}
              onClick={async (e) => {
                if (name === "") {
                  toast.error("Please fill all the fields"),
                    {
                      position: toast.POSITION.TOP_RIGHT,
                    };
                } else {
                  toast.info("Creating records...", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                  var query = `INSERT INTO "sellers"("phone_number", "seller_name", "account_balance") VALUES ('${phone}', '${name}', 1000);`;
                  await queryExchange(query);

                  query = `SELECT id FROM "sellers" WHERE phone_number = '${phone}'`;
                  var userId = await queryExchange(query);
                  userId = userId.rows[0].id;

                  localStorage.setItem("user_id", userId);

                  window.location.href = "/seller-home";
                }
              }}
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

//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-home-page.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";

const Card = (props) => {
  return (
    <div className="card-buyer">
      <div>
        <div style={{ textAlign: "center" }}>
          <img src={props.image} style={{ width: "120px" }}></img>
        </div>
        <div className="card-title">{props.name}</div>
        <div className="card-price">
          <div style={{ flex: 1, fontWeight: "bold", width: "100%" }}>
            Rs {props.price}
          </div>
          <div style={{ flex: 1, color: "#edafb8", width: "100%" }}>
            {props.discount === "BASIC10"
              ? "10% OFF"
              : props.discount === "EXTREME20"
              ? "20% OFF"
              : props.discount === "INSANE50"
              ? "50% OFF"
              : "NONE"}
          </div>
        </div>
      </div>
    </div>
  );
};

function BuyerHomePage() {
  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <div className="left-panel"></div>
        <div className="mid-panel">
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={flower}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
            />
          </div>
        </div>
        <div className="right-panel">
          <img src={flower} style={{ width: "80%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default BuyerHomePage;

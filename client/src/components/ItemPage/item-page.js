//@ts-check

import React, { useEffect, useState } from "react";
import "./item-page.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";
import { useLocation } from "react-router-dom";
import { Input, Space } from "antd";

const ItemPage = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <div
          className="left-panel"
          style={{
            textAlign: "left",
            backgroundColor: "#f7e1d7",
          }}
        >
          <div style={{ backgroundColor: "#dedbd2", padding: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              DESCRIPTION
            </div>
            <div>{location.state.description}</div>
            <br></br>
            <br></br>
            <div>
              <span style={{ fontWeight: "bold", color: "#4a5759" }}>
                Brand:{" "}
              </span>{" "}
              {location.state.brand}
            </div>
            <div>
              <span style={{ fontWeight: "bold", color: "#4a5759" }}>
                Category:{" "}
              </span>{" "}
              {location.state.category}
            </div>
          </div>
          <div className="bottom-panel">
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              DISCOUNT
            </div>
            <div style={{ fontSize: "2em", fontWeight: "bold" }}>
              {location.state.discount === "BASIC10"
                ? "10% OFF"
                : location.state.discount === "EXTREME20"
                ? "20% OFF"
                : location.state.discount === "INSANE50"
                ? "50% OFF"
                : "NONE"}
            </div>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>PRICE</div>
            <div style={{ fontSize: "2em", fontWeight: "bold" }}>
              {location.state.discount === "BASIC10" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 10) / 100}
                </div>
              ) : location.state.discount === "EXTREME20" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 20) / 100}
                </div>
              ) : location.state.discount === "INSANE50" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 50) / 100}
                </div>
              ) : (
                <div>Rs. {location.state.price}</div>
              )}
            </div>
          </div>
        </div>
        <div className="mid-panel-item">
          <div className="item-page-header">{location.state.name}</div>
          <div className="item-page-image">
            <img src={location.state.image} style={{ height: "82%" }}></img>
          </div>
          <div className="item-page-quantity">
            <div style={{ flex: 1 }}>
              Quantity&nbsp;&nbsp;
              <Input
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                style={{ borderRadius: "5px", height: "40px", width: "120px" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              {/* check quantity datatype */}
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <img src={flower} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

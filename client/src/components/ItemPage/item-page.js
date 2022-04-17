//@ts-check

import React, { useEffect, useState } from "react";
import "./item-page.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";
import { useLocation } from "react-router-dom";
import { Input, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryExchange } from "../../functionality/utils";

const ItemPage = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [buyerId, setBuyerId] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "seller"
    ) {
      window.location.href = "/seller-home";
    } else if (
      localStorage.getItem("userType") === null ||
      localStorage.getItem("userType") === undefined
    ) {
      window.location.href = "/";
    }
  }, []);

  const addToCart = async () => {
    if (quantity <= 0) {
      toast.error("Quantity cannot be less than 1", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    toast.info("Checking inventory...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    var query = `SELECT id FROM "buyers" WHERE phone_number = '${localStorage.getItem(
      "phone"
    )}'`;
    var id = await queryExchange(query);
    id = id.rows[0].id;
    setBuyerId(id);
    var query = `SELECT left_in_stock FROM "products" WHERE id=${location.state.id}`;
    var left_in_stock = await queryExchange(query);
    left_in_stock = left_in_stock.rows[0].left_in_stock;
    if (left_in_stock >= quantity) {
      var query = `INSERT INTO "cart_items" ("user_id", "product_id", "quantity") VALUES (${id}, ${location.state.id}, ${quantity})`;
      const response = await queryExchange(query);
      if (response.name && response.name === "error") {
        console.log(response);
        toast.error("An error occured", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.success("Product added to cart", {
          position: toast.POSITION.TOP_RIGHT,
        });
        window.location.href = "/buyer-home";
      }
    } else {
      toast.error(`There is/are only ${left_in_stock} left in stock`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

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
              {location.state.discount === "OFFER10"
                ? "10% OFF"
                : location.state.discount === "EXTRA20OFF" ||
                  location.state.discount === "SUMMER_SALE"
                ? "20% OFF"
                : location.state.discount === "SUPER30" ||
                  location.state.discount === "UPTO30"
                ? "30% OFF"
                : location.state.discount === "HOTPINKSALE"
                ? "40% OFF"
                : location.state.discount === "FLAT50"
                ? "50% OFF"
                : location.state.discount === "MEGADEAL"
                ? "80% OFF"
                : location.state.discount === "GREATER60"
                ? "60% OFF"
                : location.state.discount === "BUMPER_DISCOUNT"
                ? "70% OFF"
                : "NONE"}
            </div>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>PRICE</div>
            <div style={{ fontSize: "2em", fontWeight: "bold" }}>
              {location.state.discount === "OFFER10" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 10) / 100}
                </div>
              ) : location.state.discount === "EXTRA20OFF" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 20) / 100}
                </div>
              ) : location.state.discount === "SUMMER_SALE" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 20) / 100}
                </div>
              ) : location.state.discount === "SUPER30" ||
                location.state.discount === "UPTO30" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 30) / 100}
                </div>
              ) : location.state.discount === "HOTPINKSALE" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 40) / 100}
                </div>
              ) : location.state.discount === "FLAT50" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 50) / 100}
                </div>
              ) : location.state.discount === "GREATER60" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 60) / 100}
                </div>
              ) : location.state.discount === "BUMPER_DISCOUNT" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 70) / 100}
                </div>
              ) : location.state.discount === "MEGADEAL" ? (
                <div>
                  <span style={{ fontWeight: "400" }}>
                    <strike>Rs. {location.state.price}</strike>
                  </span>
                  <br></br>
                  Rs. {location.state.price - (location.state.price * 80) / 100}
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
                type="number"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                style={{ borderRadius: "5px", height: "40px", width: "120px" }}
                value={quantity}
              />
            </div>
            <div style={{ flex: 1 }}>
              <ToastContainer autoClose={5000} />
              <button className="add-to-cart-button" onClick={addToCart}>
                Add to Cart
              </button>
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

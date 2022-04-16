//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-orders.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryExchange } from "../../functionality/utils";

const OrderCard = (props) => {
  return (
    <div className="order-card">
      <div className="order-card-content">
        <div>Order ID - {props.orderId}</div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>Quantity - {props.quantity}</div>
        <div>Arriving On - {props.arrivalDate}</div>
      </div>
      <button className="order-card-button">CANCEL</button>
    </div>
  );
};

const ArrivedCard = (props) => {
  return (
    <div className="order-card" style={{ backgroundColor: "#f7e1d7" }}>
      <div className="order-card-content">
        <div>Order ID - {props.orderId}</div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>Quantity - {props.quantity}</div>
        <div>Delivered On - {props.deliveryDate}</div>
      </div>
      <button className="order-card-button">RETURN</button>
    </div>
  );
};

const BuyerOrdersPage = () => {
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

  useEffect(() => {
    async function getOrders() {
      var query = `SELECT id FROM "buyers" WHERE phone_number = '${localStorage.getItem(
        "phone"
      )}'`;
      var buyerId = await queryExchange(query);
      buyerId = buyerId.rows[0].id;

      var orders = [];
      query = `SELECT * FROM "orders" WHERE user_id = ${buyerId}`;
      var result = await queryExchange(query);
      for (let i = 0; i < result.rows.length; i++) {
        orders.push(result.rows[i]);
      }
      if (orders.length === 0) {
        toast.info("No orders placed yet", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        var orderItems = [];
        query = `SELECT * FROM "order_items" WHERE order_id IN ${inItems}`;
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <ToastContainer autoClose={5000} />
        <div
          className="left-panel-orders"
          style={{
            textAlign: "left",
            backgroundColor: "#dedbd2",
            padding: "20px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Orders Tracking
          </div>
          <div>
            <OrderCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              arrivalDate="12/12/2020"
            />
          </div>
          <div>
            <OrderCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              arrivalDate="12/12/2020"
            />
          </div>
          <div>
            <OrderCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              arrivalDate="12/12/2020"
            />
          </div>
          <div>
            <OrderCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              arrivalDate="12/12/2020"
            />
          </div>

          <div>
            <OrderCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              arrivalDate="12/12/2020"
            />
          </div>
          <div>
            <OrderCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              arrivalDate="12/12/2020"
            />
          </div>
          <div>
            <OrderCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              arrivalDate="12/12/2020"
            />
          </div>
        </div>
        <div className="middle-panel-orders">
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Arrived Items
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
          <div>
            <ArrivedCard
              orderId="1234"
              quantity="1"
              name="Sofa"
              DeliveryDate="12/12/2020"
            />
          </div>
        </div>
        <div className="right-panel">
          <img src={flower} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default BuyerOrdersPage;

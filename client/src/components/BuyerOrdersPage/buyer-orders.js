//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-orders.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";

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
  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
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

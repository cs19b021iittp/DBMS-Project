//@ts-check

import React, { useEffect, useState } from "react";
import "./seller-update.css";
import Navbar from "../Navbar/seller-navbar";
import { Radio } from "antd";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from "antd";

const Card = (props) => {
  const [category, setCategory] = useState(props.category);
  const [prodName, setProductName] = useState(props.prodName);
  const [image, setImage] = useState(props.image);
  const [quantity, setQuantity] = useState(props.quantity);
  const [price, setPrice] = useState(props.price);
  const [discount, setDiscount] = useState(props.discount);

  const menu = (
    <Menu>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("None");
          }}
        >
          None
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("BASIC10");
          }}
        >
          10%
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("EXCITING20");
          }}
        >
          20%
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("INSANE50");
          }}
        >
          50%
        </div>
      </Menu.Item>
    </Menu>
  );

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="card">
      <div className="first-side">
        <div className="name">Name: </div>
        <Input
          placeholder="Enter name"
          onChange={(e) => setProductName(e.target.value)}
          style={{ borderRadius: "5px", height: "25px", width: "200px" }}
          value={prodName}
        />
        <div className="name">Quantity: </div>
        <Input
          placeholder="Enter quantity"
          onChange={(e) => setQuantity(e.target.value)}
          style={{ borderRadius: "5px", height: "25px", width: "200px" }}
          value={quantity}
        />
        <div className="name">Price: </div>
        <Input
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
          style={{ borderRadius: "5px", height: "25px", width: "200px" }}
          value={price}
        />
        <div style={{ height: "8px" }}></div>
        <div className="name">
          Discount:{" "}
          <Dropdown overlay={menu} placement="bottom" arrow>
            <Button>{discount}</Button>
          </Dropdown>
        </div>
      </div>
      <div className="second-side">
        <div className="name">
          Image:
          <input type="file" />
        </div>
        <div className="image-display">
          {image ? (
            <img src={image} alt={image} style={{ width: "100%" }} />
          ) : null}
        </div>
      </div>
      <div className="third-side">
        <div className="name">Category:</div>
        <br></br>
        <Radio.Group onChange={changeCategory} value={category}>
          <Radio value={"Furniture"}>Furniture</Radio>
          <Radio value={"Indoor Plants"}>Indoor Plants</Radio>
          <br></br>
          <br></br>
          <Radio value={"Lighting"}>Lighting&nbsp;</Radio>
          <Radio value={"Show Pieces"}>Show Pieces</Radio>
        </Radio.Group>
        <br></br>
        <br></br>
        <button className="update-button">Update</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

function SellerUpdatePage() {
  const [balance, setBalance] = useState(100);
  const [sellerName, setSellerName] = useState("Seller Name");

  return (
    <div>
      <Navbar />
      <div className="seller-home-page">
        <div className="left-panel">
          <div className="seller-name">{sellerName}</div>
          <div className="wallet-balance">Wallet Balance</div>
          <div className="wallet-balance" style={{ fontSize: "2em" }}>
            {balance}
          </div>
          <button className="logout-button">Logout</button>
        </div>
        <div className="right-panel">
          <div
            style={{
              height: "90vh",
              width: "100%",
              overflow: "auto",
              border: "1px solid grey",
            }}
          >
            <Card
              prodName="prodName"
              quantity="quantity"
              price="1000"
              discount="EXTREME20"
              image=""
              category="Furniture"
            />
            <Card
              prodName="prodName"
              quantity="quantity"
              price="1000"
              discount="EXTREME20"
              image=""
              category="Furniture"
            />

            <Card
              prodName="prodName"
              quantity="quantity"
              price="1000"
              discount="EXTREME20"
              image=""
              category="Furniture"
            />
            <Card
              prodName="prodName"
              quantity="quantity"
              price="1000"
              discount="EXTREME20"
              image=""
              category="Furniture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerUpdatePage;

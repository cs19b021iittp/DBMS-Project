//@ts-check

import React, { useEffect, useState } from "react";
import "./seller-home-page.css";
import Navbar from "../Navbar/seller-navbar";
import { Radio } from "antd";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from "antd";

const { TextArea } = Input;

function SellerHomePage() {
  const [balance, setBalance] = useState(100);
  const [sellerName, setSellerName] = useState("Seller Name");
  const [category, setCategory] = useState("Furniture");
  const [prodName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState("Select Discount");
  const [description, setDescription] = useState("");

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

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
        <div className="seller-right-panel">
          <div className="seller-right-panel-left">
            <div style={{ fontSize: "2em", fontWeight: "bold" }}>
              Upload a new item
            </div>
            <br></br>
            <div className="seller-right-panel-content">
              <div
                style={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                }}
              >
                Select Category
              </div>
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
              <div
                style={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                }}
              >
                Name of the product
              </div>
              <br></br>
              <Input
                placeholder="Enter Name"
                onChange={(e) => setProductName(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "250px" }}
              />
              <br></br>
              <br></br>
              <div
                style={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                }}
              >
                Upload image of the product
              </div>
              <input type="file" />
              <br></br>
              <br></br>
              <div className="image-display">
                {image ? (
                  <img src={image} alt={image} style={{ width: "100%" }} />
                ) : null}
              </div>

              <br></br>
              <div
                style={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                }}
              >
                Enter quantity of the product
              </div>
              <br></br>
              <Input
                placeholder="Enter quantity"
                onChange={(e) => setQuantity(e.target.value)}
                style={{ borderRadius: "5px", height: "40px", width: "150px" }}
              />
            </div>
          </div>
          <div className="seller-right-panel-right">
            <div style={{ display: "flex" }}>
              <div style={{ flex: "1" }}>
                <div
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "600",
                  }}
                >
                  Enter base price
                </div>
                <br></br>
                <Input
                  placeholder="Enter base price"
                  onChange={(e) => setPrice(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    height: "40px",
                    width: "210px",
                  }}
                />
              </div>
              <div style={{ flex: "1" }}>
                <div
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "600",
                  }}
                >
                  Enter discount (if any)
                </div>
                <br></br>
                <Dropdown overlay={menu} placement="bottom" arrow>
                  <Button>{discount}</Button>
                </Dropdown>
              </div>
            </div>
            <br></br>
            <br></br>
            <div
              style={{
                fontSize: "1.5em",
                fontWeight: "600",
              }}
            >
              Enter description and features
            </div>
            <br></br>
            <TextArea
              rows={15}
              placeholder="Enter Description and features"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <br></br>
            <button className="add-item">Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerHomePage;

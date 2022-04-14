//@ts-check

import React, { useEffect, useState } from "react";
import "./seller-home-page.css";
import Navbar from "../Navbar/seller-navbar";
import { Radio } from "antd";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryExchange } from "../../functionality/utils";

const { TextArea } = Input;

function SellerHomePage() {
  const [balance, setBalance] = useState("");
  const [sellerName, setSellerName] = useState("Name");
  const [sellerId, setSellerId] = useState("");
  const [category, setCategory] = useState("furniture");
  const [brand, setBrand] = useState("home_centre");
  const [prodName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("None");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("userType") !== null &&
      localStorage.getItem("userType") !== undefined &&
      localStorage.getItem("userType") === "buyer"
    ) {
      window.location.href = "/buyer-home";
    } else if (
      localStorage.getItem("userType") === null ||
      localStorage.getItem("userType") === undefined
    ) {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    async function fetchDetails() {
      var query = `SELECT id FROM "sellers" WHERE phone_number = '${localStorage.getItem(
        "phone"
      )}'`;
      var sellerId = await queryExchange(query);
      sellerId = sellerId.rows[0].id;
      setSellerId(sellerId);
      query = `SELECT seller_name, account_balance FROM "sellers" WHERE id = ${sellerId}`;
      var result = await queryExchange(query);
      setSellerName(result.rows[0].seller_name);
      setBalance(result.rows[0].account_balance);
    }

    fetchDetails();
  }, []);

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const changeBrand = (e) => {
    setBrand(e.target.value);
  };

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function(ev) {
        setImage(ev.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
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
            setDiscount("OFFER10");
          }}
        >
          10%
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("EXTRA20OFF");
          }}
        >
          20%
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("SUPER30");
          }}
        >
          30%
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("HOTPINKSALE");
          }}
        >
          40%
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          onClick={() => {
            setDiscount("FLAT50");
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
          <button
            className="logout-button"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button>
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
                <Radio value={"furniture"}>Furniture</Radio>
                <Radio value={"plants"}>Indoor Plants</Radio>
                <br></br>
                <br></br>
                <Radio value={"lighting"}>Lighting&nbsp;</Radio>
                <Radio value={"show_pieces"}>Show Pieces</Radio>
              </Radio.Group>
              <br></br>
              <br></br>
              <div
                style={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                }}
              >
                Select Brand
              </div>
              <Radio.Group onChange={changeBrand} value={brand}>
                <Radio value={"home_centre"}>Home Centre</Radio>
                <Radio value={"ddecor"}>d-Decor</Radio>
                <Radio value={"stylestop"}>StyleStop</Radio>
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
              <input type="file" onChange={uploadImage} />
              <br></br>
              <br></br>
              <div className="image-display">
                {image !== "" ? (
                  <img src={image} alt={image} style={{ width: "100%" }} />
                ) : null}
              </div>
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
                  Enter quantity of the product
                </div>
                <br></br>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{
                    borderRadius: "5px",
                    height: "40px",
                    width: "150px",
                  }}
                />
                <br></br>
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
                  type="number"
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
              rows={10}
              placeholder="Enter Description and features"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <br></br>
            <ToastContainer autoClose={5000} />
            <button
              className="add-item"
              onClick={async () => {
                if (
                  category === "" ||
                  prodName === "" ||
                  price === "" ||
                  quantity === "" ||
                  description === "" ||
                  image === ""
                ) {
                  toast.error("Please fill all the fields", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                } else if (parseInt(quantity) <= 0 || parseInt(price) <= 0) {
                  toast.error("Please enter valid quantity or price", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                } else {
                  toast.info("Creating records...", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                  var query = `SELECT id FROM "discounts" WHERE name='${discount}'`;
                  var discountId = await queryExchange(query);
                  try {
                    discountId = discountId.rows[0].id;
                  } catch (err) {
                    discountId = "NULL";
                  }
                  query = `INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id") VALUES('${prodName}', '${image}', '${description}', ('${category}'), ('${brand}'), ${sellerId}, ${price}, ${quantity}, ${discountId});`;
                  const response = await queryExchange(query);
                  if (response.name && response.name === "error") {
                    console.log(response);
                    toast.error("An error occured", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  } else {
                    toast.success("Product added successfully", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                    window.location.reload();
                  }
                }
              }}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerHomePage;

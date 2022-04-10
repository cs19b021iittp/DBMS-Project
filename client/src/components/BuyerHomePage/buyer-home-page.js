//@ts-check

import React, { useEffect, useState } from "react";
/* import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../chatbot2/config";
import MessageParser from "../../chatbot2/MessageParser";
import ActionProvider from "../../chatbot2/ActionProvider"; */

import Chatbot from '../../chatbot/Chatbot';
//import { ThemeProvider } from 'styled-components';

import "./buyer-home-page.css";
import Navbar from "../Navbar/buyer-navbar";
import sofa from "../../assets/sofa.svg";
import flower from "../../assets/dashboard_flower.svg";
import { Checkbox } from "antd";
import { Radio } from "antd";
import { Link } from "react-router-dom";
//import {steps, theme} from "../../chatbot/steps";



const Card = (props) => {
  return (
    <Link
      style={{ textDecoration: "none", border: "none", color: "black" }}
      to={{
        pathname: "/item",
        state: {
          image: props.image,
          name: props.name,
          price: props.price,
          discount: props.discount,
          description: props.description,
          brand: props.brand,
          category: props.category,
        },
      }}
    >
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
    </Link>
  );
};

function BuyerHomePage() {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const categoryOptions = [
    { label: "Furniture", value: "Furniture" },
    { label: "Lighting", value: "Lighting" },
    { label: "Indoor Plants", value: "Indoor Plants" },
    { label: "Show Pieces", value: "Show Pieces" },
  ];

  const brandOptions = [
    { label: "Home Centre", value: "Home Centre" },
    { label: "d-Decor", value: "d-Decor" },
    { label: "StyleStop", value: "StyleStop" },
  ];

  function onChangeCategory(categories) {
    console.log(categories);
  }

  function onChangeBrand(brands) {
    console.log(brands);
  }

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changeSortPrice = (e) => {
    setSortPrice(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <div
          className="left-panel"
          style={{ textAlign: "left", padding: "20px" }}
        >
          <div className="left-panel-header">Filter by category</div>
          <div style={{ width: "50%", fontSize: "1.2em" }}>
            <Checkbox.Group
              options={categoryOptions}
              defaultValue={[
                "Furniture",
                "Lighting",
                "Indoor Plants",
                "Show Pieces",
              ]}
              onChange={onChangeCategory}
            />
          </div>
          <br></br>
          <div className="left-panel-header">Filter by price</div>
          <div style={{ width: "55%", fontSize: "1.4em" }}>
            <Radio.Group onChange={changePrice} value={price}>
              <Radio value={"lt1k"}>{"<"}1000</Radio>
              <Radio value={"1kto5k"}>1000 - 5000</Radio>
              <Radio value={"5kto10k"}>5000 - 10000</Radio>
              <Radio value={"gt10k"}>{">"}10000</Radio>
            </Radio.Group>
          </div>
          <br></br>
          <div className="left-panel-header">Sort by price</div>
          <div style={{ width: "55%", fontSize: "1.4em" }}>
            <Radio.Group onChange={changeSortPrice} value={sortPrice}>
              <Radio value={"increasing"}>Increasing</Radio>
              <Radio value={"decreasing"}>Decreasing</Radio>
            </Radio.Group>
          </div>
          <br></br>
          <div className="left-panel-header">Filter by brand</div>
          <div style={{ width: "55%", fontSize: "1.4em" }}>
            <Checkbox.Group
              options={brandOptions}
              defaultValue={["Home Centre", "d-Decor", "StyleStop"]}
              onChange={onChangeBrand}
            />
          </div>
        </div>
        <div className="mid-panel"> 
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
              description="A single sofa with a modern design. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes.. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes."
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
              description="A single sofa with a modern design. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes."
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
              description="A single sofa with a modern design. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes."
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
              description="A single sofa with a modern design. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes."
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
              description="A single sofa with a modern design. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes."
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
              description="A single sofa with a modern design. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes."
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
              description="A single sofa with a modern design. It is made of high quality wood and has a modern look. It is available in different colors. The sofa is available in two sizes."
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
            />
          </div>
          <div style={{ float: "left" }}>
            <Card
              image={sofa}
              name="Single Sofa"
              price="3400"
              discount="BASIC10"
              brand="Home Centre"
              category="Furniture"
            />
          </div>
        </div>
        <div className="right-panel">
        <div className="chatbot">
          <Chatbot />
        {/* <ThemeProvider theme={theme}>
          <ChatBot 
          speechSynthesis={{ enable: true, lang: 'en' }}
          headerTitle="Chat with the Tsumani Deal Bot"
          recognitionEnable={true}
          steps={steps} 
          />
        </ThemeProvider>  */}
        </div>
          {/* <img src={flower} style={{ width: "80%" }}></img> */}
        </div>
      </div>
    </div>
  );
}

export default BuyerHomePage;

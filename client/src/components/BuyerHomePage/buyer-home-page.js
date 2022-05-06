//@ts-check

import React, { useEffect, useState } from "react";
import Chatbot from "../../chatbot/Chatbot";
//import { ThemeProvider } from 'styled-components';

import "./buyer-home-page.css";
import Navbar from "../Navbar/buyer-navbar";
import sofa from "../../assets/sofa.svg";
import flower from "../../assets/dashboard_flower.svg";
import { Checkbox } from "antd";
import { Radio } from "antd";
import { Link } from "react-router-dom";
//import {steps, theme} from "../../chatbot/steps";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryExchange } from "../../functionality/utils";
import { searchFunction } from "../../functionality/search";

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
          seller_id: props.sellerId,
          id: props.id,
        },
      }}
    >
      <div className="card-buyer">
        <div>
          <div style={{ textAlign: "center" }}>
            <img src={props.image} style={{ height: "110px" }}></img>
          </div>
          <div className="card-title">{props.name}</div>
          <div className="card-price">
            <div style={{ flex: 1, fontWeight: "bold", width: "100%" }}>
              Rs {props.price}
            </div>
            <div style={{ flex: 1, color: "#edafb8", width: "100%" }}>
              {props.discount === "OFFER10"
                ? "10% OFF"
                : props.discount === "EXTRA20OFF" ||
                  props.discount === "SUMMER_SALE"
                ? "20% OFF"
                : props.discount === "SUPER30" || props.discount === "UPTO30"
                ? "30% OFF"
                : props.discount === "HOTPINKSALE"
                ? "40% OFF"
                : props.discount === "FLAT50"
                ? "50% OFF"
                : props.discount === "MEGADEAL"
                ? "80% OFF"
                : props.discount === "GREATER60"
                ? "60% OFF"
                : props.discount === "BUMPER_DISCOUNT"
                ? "70% OFF"
                : "NONE"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

function BuyerHomePage() {
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem("categories"))
  );
  const [brand, setBrand] = useState(
    JSON.parse(localStorage.getItem("brands"))
  );
  const [price, setPrice] = useState(parseInt(localStorage.getItem("price")));
  const [sortPrice, setSortPrice] = useState(localStorage.getItem("sortPrice"));
  const [items, setItems] = useState([]);
  const [discountMapping, setDiscounts] = useState(null);

  var categories = new Map();
  categories.set("furniture", "Furniture");
  categories.set("lighting", "Lighting");
  categories.set("plants", "Indoor Plants");
  categories.set("show_pieces", "Show Pieces");

  var brands = new Map();
  brands.set("home_centre", "Home Centre");
  brands.set("ddecor", "d-Decor");
  brands.set("stylestop", "StyleStop");

  const categoryOptions = [
    { label: "Furniture", value: "furniture" },
    { label: "Lighting", value: "lighting" },
    { label: "Indoor Plants", value: "plants" },
    { label: "Show Pieces", value: "show_pieces" },
  ];

  const brandOptions = [
    { label: "Home Centre", value: "home_centre" },
    { label: "d-Decor", value: "ddecor" },
    { label: "StyleStop", value: "stylestop" },
  ];

  useEffect(() => {
    async function fetchDetails() {
      toast.info("Fetching items...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var results = sessionStorage.getItem("search_results");
      var query = `SELECT * FROM "discounts"`;
      var discounts = await queryExchange(query);
      var discountsMap = new Map();
      discounts.rows.forEach((discount) => {
        discountsMap.set(discount.id, discount.name);
      });
      setDiscounts(discountsMap);

      if (results === "" || results === "[]") {
        var query = `SELECT * FROM "products"`;
        var list = await queryExchange(query);
        setItems(list.rows);
      } else {
        setItems(JSON.parse(sessionStorage.getItem("search_results")));
      }
      // sessionStorage.setItem("search_results", "[]");
    }

    fetchDetails();
  }, []);

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

  function onChangeCategory(categories) {
    setCategory(categories);
  }

  function onChangeBrand(brands) {
    setBrand(brands);
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
              defaultValue={category}
              onChange={onChangeCategory}
            />
          </div>
          <br></br>
          <div className="left-panel-header">Filter by price</div>
          <div style={{ width: "55%", fontSize: "1.4em" }}>
            <Radio.Group onChange={changePrice} value={price}>
              <Radio value={1}>{"<"}1000</Radio>
              <Radio value={2}>1000 - 5000</Radio>
              <Radio value={3}>5000 - 10000</Radio>
              <Radio value={4}>{">"}10000</Radio>
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
              defaultValue={brand}
              onChange={onChangeBrand}
            />
          </div>
          <button
            className="button-apply-filter"
            onClick={async () => {
              localStorage.setItem("categories", JSON.stringify(category));
              localStorage.setItem("brands", JSON.stringify(brand));
              localStorage.setItem("price", price.toString());
              localStorage.setItem("sortPrice", sortPrice);
              toast.info("Applying filters...", {
                position: toast.POSITION.TOP_RIGHT,
              });
              await searchFunction(
                sessionStorage.getItem("search_query"),
                category,
                brand,
                price,
                sortPrice
              );
              setItems(JSON.parse(sessionStorage.getItem("search_results")));
            }}
          >
            Apply Filters
          </button>
          <div style={{ height: "50px" }}></div>
          <button
            className="button-apply-clear"
            onClick={() => {
              localStorage.setItem(
                "categories",
                JSON.stringify([
                  "furniture",
                  "lighting",
                  "plants",
                  "show_pieces",
                ])
              );
              localStorage.setItem(
                "brands",
                JSON.stringify(["home_centre", "ddecor", "stylestop"])
              );
              localStorage.setItem("price", "0");
              localStorage.setItem("sortPrice", "");
              window.location.reload;
            }}
          >
            Restore Filters
          </button>
        </div>
        <ToastContainer autoClose={5000} />
        <div className="mid-panel">
          {items.map((e) => {
            return (
              <div style={{ float: "left" }}>
                <Card
                  id={e.id}
                  sellerId={e.seller_id}
                  left_in_stock={e.left_in_stock}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  discount={discountMapping.get(e.discount_id)}
                  brand={brands.get(e.brand)}
                  category={categories.get(e.category)}
                  description={e.description}
                />
              </div>
            );
          })}
        </div>
        <div className="right-panel">
          <div className="chatbot">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerHomePage;

//@ts-check

import React, { useEffect, useState } from "react";
import "./cart-page.css";
import Navbar from "../Navbar/buyer-navbar";
import flower from "../../assets/dashboard_flower.svg";
import sofa from "../../assets/sofa.svg";
import { Link, useLocation } from "react-router-dom";
import { queryExchange } from "../../functionality/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const removeItem = async () => {
    // console.log(props.cartId);
    var query = `DELETE FROM "cart_items" WHERE id = ${props.cartId}`;
    // console.log(query);
    const response = await queryExchange(query);
    if (response.name && response.name === "error") {
      console.log(response);
      toast.error("An error occured", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success("Product removed successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.location.reload();
    }
  };

  return (
    <div className="card-cart">
      <div className="card-cart-image">
        <img src={props.image} style={{ height: "80px" }} />
      </div>
      <div className="card-cart-content">
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>Unit Price After Discount = Rs. {props.price}</div>
      </div>
      <ToastContainer autoClose={5000} />
      <button className="card-cart-button" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [buyerId, setBuyerId] = useState("");
  const [total, setTotal] = useState(0);
  const [arrivalDate, setArrival] = useState("");

  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

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
    async function fetchDetails() {
      toast.info("Fetching your cart...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var query = `SELECT id FROM "buyers" WHERE phone_number = '${localStorage.getItem(
        "phone"
      )}'`;
      var id = await queryExchange(query);
      id = id.rows[0].id;
      setBuyerId(id);
      var query = `SELECT * FROM "cart_items" WHERE user_id = ${id}`;
      var cartItems = await queryExchange(query);
      cartItems = cartItems.rows;
      if (cartItems.length === 0) {
        toast.info("Your cart is empty", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      var inItems = "";
      var inDiscounts = "";
      for (var i = 0; i < cartItems.length; i++) {
        inItems += cartItems[i].product_id + ",";
      }
      inItems = inItems.slice(0, -1);
      inItems = "(" + inItems + ")";
      var query = `SELECT * FROM "products" WHERE id IN ${inItems}`;
      console.log(query);
      var products = await queryExchange(query);
      console.log(products.rows);
      products = products.rows;
      for (var i = 0; i < products.length; i++) {
        inDiscounts += products[i].discount_id + ",";
      }
      inDiscounts = inDiscounts.slice(0, -1);
      inDiscounts = "(" + inDiscounts + ")";
      var query = `SELECT * FROM "discounts" WHERE id IN ${inDiscounts}`;
      console.log(query);

      var discounts = await queryExchange(query);
      discounts = discounts.rows;
      var discountsMap = new Map();
      for (var i = 0; i < discounts.length; i++) {
        discountsMap.set(discounts[i].id, parseInt(discounts[i].percent));
      }
      var tempItems = [];
      var price = 0;
      for (var i = 0; i < cartItems.length; i++) {
        for (var j = 0; j < products.length; j++) {
          if (cartItems[i].product_id === products[j].id) {
            tempItems.push({
              cartId: cartItems[i].id,
              id: cartItems[i].product_id,
              name: products[j].name,
              image: products[j].image,
              price:
                cartItems[i].quantity *
                (products[j].price -
                  (products[j].price *
                    discountsMap.get(products[j].discount_id)) /
                    100),
              quantity: cartItems[i].quantity,
              seller_id: products[j].seller_id,
            });
            price +=
              cartItems[i].quantity *
              (products[j].price -
                (products[j].price *
                  discountsMap.get(products[j].discount_id)) /
                  100);
            break;
          }
        }
      }
      setTotal(price);
      setItems(tempItems);
      setArrival(addDays(new Date(), 4).toDateString());
    }

    fetchDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <div
          className="left-panel"
          style={{
            textAlign: "left",
            backgroundColor: "#dedbd2",
            padding: "20px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Billing Details
          </div>
          <div className="table-cart">
            <table>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>

              {items.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <br></br>
          <br></br>
          <div className="billing-details">
            <div style={{ fontSize: "1.2em" }}>Total Amount: {total}</div>
            <div style={{ fontSize: "1em" }}>
              Expected Delivery: {arrivalDate}
            </div>
          </div>
        </div>
        <ToastContainer autoClose={5000} />
        <div className="mid-panel">
          {items.map((item) => (
            <div>
              <Card
                name={item.name}
                image={item.image}
                price={item.price}
                id={item.id}
                cartId={item.cartId}
              />
            </div>
          ))}
        </div>
        <div className="right-panel">
          <div className="proceed-button">
            {items.length > 0 ? (
              <Link
                style={{
                  textDecoration: "none",
                  border: "none",
                  color: "black",
                }}
                to={{
                  pathname: "/payment-page",
                  state: {
                    items: items,
                    total: total,
                    buyer_id: buyerId,
                  },
                }}
              >
                <button className="proceed-button-act">Proceed to Pay</button>
              </Link>
            ) : null}
          </div>
          <img src={flower} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

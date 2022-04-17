//@ts-check

import React, { useEffect, useState } from "react";
import "./buyer-orders.css";
import Navbar from "../Navbar/buyer-navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryExchange } from "../../functionality/utils";

const OrderCard = (props) => {
  const cancelOrder = async () => {
    toast.info("Getting details...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    var priceToAdd = 0;
    var quantityToAdd = props.quantity;
    var buyerId;
    var query = `SELECT id FROM "buyers" WHERE phone_number = '${localStorage.getItem(
      "phone"
    )}'`;
    buyerId = await queryExchange(query);
    buyerId = buyerId.rows[0].id;

    query = `SELECT price, discount_id FROM "products" WHERE id=${props.productId}`;
    var response = await queryExchange(query);
    var originalPrice = response.rows[0].price;
    var discountId = response.rows[0].discount_id;

    query = `SELECT percent FROM "discounts" WHERE id=${discountId}`;
    response = await queryExchange(query);
    var discount = parseFloat(response.rows[0].percent) / 100;
    priceToAdd = quantityToAdd * (originalPrice - originalPrice * discount);

    toast.info("Running transaction...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    query = "";
    query += `BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSAVEPOINT cancel_save_point;\n`;
    query += `UPDATE "products" SET left_in_stock = left_in_stock + ${quantityToAdd} WHERE id = ${props.productId};\n`;
    query += `UPDATE "buyers" SET wallet_balance = wallet_balance + ${priceToAdd} WHERE id = ${buyerId};\n`;
    query += `UPDATE "sellers" SET account_balance = account_balance - ${priceToAdd} WHERE id = ${props.sellerId};\n`;
    query += `DELETE FROM "order_items" WHERE id = ${props.orderItemId};\n`;
    query += `COMMIT;`;
    response = await queryExchange(query);
    console.log(query);
    if (response.name && response.name === "error") {
      toast.error("Transaction failed. Rolling back...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      await queryExchange(`ROLLBACK TO cancel_save_point;`);
      return;
    }
    toast.success("Transaction successful. Order cancelled.", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="order-card">
      <div className="order-card-content">
        <div>Order ID - {props.orderId}</div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>Quantity - {props.quantity}</div>
        <div>Arriving On - {props.arrivalDate}</div>
      </div>
      <ToastContainer autoClose={5000} />
      <button className="order-card-button" onClick={cancelOrder}>
        CANCEL
      </button>
    </div>
  );
};

const ArrivedCard = (props) => {
  const returnItem = async () => {
    toast.info("Getting details...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    var priceToAdd = 0;
    var quantityToAdd = props.quantity;
    var buyerId;
    var query = `SELECT id FROM "buyers" WHERE phone_number = '${localStorage.getItem(
      "phone"
    )}'`;
    buyerId = await queryExchange(query);
    buyerId = buyerId.rows[0].id;

    query = `SELECT price, discount_id FROM "products" WHERE id=${props.productId}`;
    var response = await queryExchange(query);
    var originalPrice = response.rows[0].price;
    var discountId = response.rows[0].discount_id;

    query = `SELECT percent FROM "discounts" WHERE id=${discountId}`;
    response = await queryExchange(query);
    var discount = parseFloat(response.rows[0].percent) / 100;
    priceToAdd = quantityToAdd * (originalPrice - originalPrice * discount);

    toast.info("Running transaction...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    query = "";
    query += `BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSAVEPOINT return_save_point;\n`;
    query += `UPDATE "products" SET left_in_stock = left_in_stock + ${quantityToAdd} WHERE id = ${props.productId};\n`;
    query += `UPDATE "buyers" SET wallet_balance = wallet_balance + ${priceToAdd} WHERE id = ${buyerId};\n`;
    query += `UPDATE "sellers" SET account_balance = account_balance - ${priceToAdd} WHERE id = ${props.sellerId};\n`;
    query += `DELETE FROM "order_items" WHERE id = ${props.orderItemId};\n`;
    query += `COMMIT;`;
    response = await queryExchange(query);
    console.log(query);
    if (response.name && response.name === "error") {
      toast.error("Transaction failed. Rolling back...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      await queryExchange(`ROLLBACK TO return_save_point;`);
      return;
    }
    toast.success("Transaction successful. Item scheduled for return.", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="order-card" style={{ backgroundColor: "#f7e1d7" }}>
      <div className="order-card-content">
        <div>Order ID - {props.orderId}</div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>Quantity - {props.quantity}</div>
        <div>Delivered On - {props.deliveryDate}</div>
      </div>
      <button className="order-card-button" onClick={returnItem}>
        RETURN
      </button>
    </div>
  );
};

const BuyerOrdersPage = () => {
  const [buyerId, setBuyerId] = useState("");
  const [ordersTracking, setOrdersTracking] = useState([]);
  const [arrivedItems, setArrivedItems] = useState([]);

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
    async function getOrders() {
      toast.info("Getting your orders...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var query = `SELECT id FROM "buyers" WHERE phone_number = '${localStorage.getItem(
        "phone"
      )}'`;
      var buyerId = await queryExchange(query);
      buyerId = buyerId.rows[0].id;
      setBuyerId(buyerId);

      var orders = [];
      var ordersMapping = new Map();
      query = `SELECT * FROM "orders" WHERE user_id = ${buyerId}`;
      var result = await queryExchange(query);
      for (let i = 0; i < result.rows.length; i++) {
        orders.push(result.rows[i]);
        ordersMapping.set(orders[i].id, {
          status: orders[i].status,
          arrivingOn: orders[i].arriving_on,
        });
      }
      if (orders.length === 0) {
        toast.info("No orders placed yet", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        var inItems = "";
        for (let i = 0; i < orders.length; i++) {
          inItems += orders[i].id;
          inItems += ",";
        }
        inItems = inItems.slice(0, -1);
        inItems = "(" + inItems + ")";
        var inProductIds = "";
        var orderItems = [];
        query = `SELECT * FROM "order_items" WHERE order_id IN ${inItems}`;
        result = await queryExchange(query);
        for (let i = 0; i < result.rows.length; i++) {
          orderItems.push(result.rows[i]);
          inProductIds += result.rows[i].product_id;
          inProductIds += ",";
        }
        inProductIds = inProductIds.slice(0, -1);
        inProductIds = "(" + inProductIds + ")";
        query = `SELECT * FROM "products" WHERE id IN ${inProductIds}`;
        result = await queryExchange(query);
        var products = result.rows;
        var productItems = new Map();
        products.map((product) => {
          productItems.set(product.id, {
            name: product.name,
            sellerId: product.seller_id,
          });
        });
        var orderCardItems = [];
        var arrivedCardItems = [];
        orderItems.map((item) => {
          if (ordersMapping.get(item.order_id).status === "on_the_way") {
            orderCardItems.push({
              orderItemId: item.id,
              orderId: item.order_id,
              name: productItems.get(item.product_id).name,
              quantity: item.quantity,
              arrivalDate: ordersMapping.get(item.order_id).arrivingOn,
              sellerId: productItems.get(item.product_id).sellerId,
              productId: item.product_id,
            });
          } else if (ordersMapping.get(item.order_id).status === "delivered") {
            arrivedCardItems.push({
              orderItemId: item.id,
              orderId: item.order_id,
              name: productItems.get(item.product_id).name,
              quantity: item.quantity,
              arrivalDate: ordersMapping.get(item.order_id).arrivingOn,
              sellerId: productItems.get(item.product_id).sellerId,
              productId: item.product_id,
            });
          }
        });
        setOrdersTracking(orderCardItems);
        setArrivedItems(arrivedCardItems);

        query = "";
        orders.map((order) => {
          if (
            addDays(order.created_at, 4) <= new Date() &&
            order.status === "on_the_way"
          ) {
            query += `UPDATE "orders" SET status=('delivered') WHERE id=${order.id};\n`;
          }
        });
        await queryExchange(query);
      }
    }

    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="buyer-home-page">
        <ToastContainer autoClose={3000} />
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
          {ordersTracking.map((e) => {
            return (
              <div>
                <OrderCard
                  orderItemId={e.orderItemId}
                  orderId={e.orderId}
                  quantity={e.quantity}
                  name={e.name}
                  arrivalDate={new Date(e.arrivalDate).toDateString()}
                  productId={e.productId}
                  sellerId={e.sellerId}
                />
              </div>
            );
          })}
        </div>
        <div className="middle-panel-orders">
          <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Arrived Items
          </div>
          {arrivedItems.map((e) => {
            return (
              <div>
                <ArrivedCard
                  orderItemId={e.orderItemId}
                  orderId={e.orderId}
                  quantity={e.quantity}
                  name={e.name}
                  deliveryDate={new Date(e.arrivalDate).toDateString()}
                  productId={e.productId}
                  sellerId={e.sellerId}
                />
              </div>
            );
          })}
        </div>
        <div className="right-panel">
          {/* <img src={flower} style={{ width: "100%" }}></img> */}
        </div>
      </div>
    </div>
  );
};

export default BuyerOrdersPage;

//@ts-check

import React, { useEffect, useState } from "react";
import "./seller-update.css";
import Navbar from "../Navbar/seller-navbar";
import { Radio } from "antd";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from "antd";
import { queryExchange } from "../../functionality/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const [category, setCategory] = useState(props.category);
  const [prodName, setProductName] = useState(props.prodName);
  const [image, setImage] = useState(props.image);
  const [quantity, setQuantity] = useState(props.quantity);
  const [price, setPrice] = useState(props.price);
  const [discount, setDiscount] = useState(props.discount);
  const [id, setId] = useState(props.id);

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

  const changeCategory = (e) => {
    setCategory(e.target.value);
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

  const removeItem = async (e) => {
    e.preventDefault();
    const query = `DELETE from "products" WHERE id = ${id}`;
    await queryExchange(query)
      .then(() => {
        toast.success("Item removed successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Item could not be removed", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const updateItem = async () => {
    if (
      prodName === "" ||
      image === "" ||
      quantity === "" ||
      price === "" ||
      quantity <= 0 ||
      price <= 0
    ) {
      toast.error("Please fill all the fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.info("Updating item", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var query = `SELECT id FROM "discounts" WHERE name='${discount}'`;
      var discountId = await queryExchange(query);
      try {
        discountId = discountId.rows[0].id;
      } catch (err) {
        discountId = "NULL";
      }
      console.log(discountId);
      var query = `UPDATE "products" SET "category" = ('${category}'), "name" = '${prodName}', "image" = '${image}', "left_in_stock" = ${quantity}, "price" = ${price}, "discount_id" = '${discountId}' WHERE id = ${id}`;
      const response = await queryExchange(query);
      if (response.name && response.name === "error") {
        console.log(response);
        toast.error("An error occured", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.success("Item updateItem successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
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
          type="number"
          placeholder="Enter quantity"
          onChange={(e) => setQuantity(e.target.value)}
          style={{ borderRadius: "5px", height: "25px", width: "200px" }}
          value={quantity}
        />
        <div className="name">Price: </div>
        <Input
          type="number"
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
          <input type="file" onChange={uploadImage} />
        </div>
        <div className="image-display">
          {image ? (
            <img src={image} alt={image} style={{ height: "100%" }} />
          ) : null}
        </div>
      </div>
      <div className="third-side">
        <div className="name">Category:</div>
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
        <ToastContainer autoClose={5000} />
        <button className="update-button" onClick={updateItem}>
          Update
        </button>
        <button className="remove-button" onClick={removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
};

function SellerUpdatePage() {
  const [balance, setBalance] = useState("");
  const [sellerName, setSellerName] = useState("Name");
  const [sellerId, setSellerId] = useState("");
  const [sellerItems, setSellerItems] = useState([]);

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
    async function getItems() {
      toast.info("Fetching items...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      var query = `SELECT id FROM "sellers" WHERE phone_number = '${localStorage.getItem(
        "phone"
      )}'`;
      var sellerId = await queryExchange(query);
      sellerId = sellerId.rows[0].id;
      setSellerId(sellerId);

      var discounts = new Map();

      query = `SELECT * FROM "discounts"`;
      const result = await queryExchange(query);
      result.rows.forEach((element) => {
        discounts.set(element.id, element.name);
      });

      query = `SELECT * FROM "products" WHERE seller_id = '${sellerId}'`;
      var items = await queryExchange(query);

      var tempItems = [];

      for (let i = 0; i < items.rows.length; i++) {
        if (
          items.rows[i].discount_id !== null ||
          items.rows[i].discount_id === -1
        ) {
          items.rows[i].discount = discounts.get(items.rows[i].discount_id);
        } else {
          items.rows[i].discount = "None";
        }
        const obj = {
          id: items.rows[i].id,
          prodName: items.rows[i].name,
          quantity: items.rows[i].left_in_stock,
          price: items.rows[i].price,
          discount: items.rows[i].discount,
          image: items.rows[i].image,
          category: items.rows[i].category,
        };
        tempItems.push(obj);
      }

      setSellerItems(tempItems);

      var query = `SELECT seller_name FROM "sellers" WHERE id = ${sellerId}`;
      var name = await queryExchange(query);
      setSellerName(name.rows[0].seller_name);
      query = `SELECT account_balance FROM "sellers" WHERE id = ${sellerId}`;
      var balance = await queryExchange(query);
      setBalance(balance.rows[0].account_balance);
    }

    getItems();
  }, []);

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
        <div className="right-panel">
          <ToastContainer autoClose={10000} />
          <div
            style={{
              height: "90vh",
              width: "100%",
              overflow: "auto",
            }}
          >
            {sellerItems.map((item) => {
              return (
                <Card
                  id={item.id}
                  prodName={item.prodName}
                  quantity={item.quantity}
                  price={item.price}
                  discount={item.discount}
                  image={item.image}
                  category={item.category}
                  function={SellerUpdatePage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerUpdatePage;

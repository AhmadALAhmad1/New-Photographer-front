import React from "react";
import "../styles/Shop.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import ba from "../components/About/AboutHeader/ba.jpg";

const Shop = () => {
  const Navigate = useNavigate();

  function handleBuyClick(ItemId) {
    if (localStorage.getItem("token")) {
      Navigate(`/checkout?ItemId=${ItemId}`);
    } else {
      Navigate("/login");
    }
  }

  const [Items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  //GET ALL
  const getAllItems = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/Items/");
      setItems(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Filter items based on category
  const boomFilteredItems = Items.filter((item) => item.category === "boom");
  const printFilteredItems = Items.filter((item) => item.category === "print");
  const lenseFilteredItems = Items.filter((item) => item.category === "lense");
  return (
    <>
      <AboutHeader backgroundImage={ba} />

      <h1 className="titles">BOOOM</h1>
      <div className="boom">
        {boomFilteredItems.map((item) => {
          return (
            <div key={item._id} className="col-1">
              <img src={item.image_url} alt="" />
              <h2>{item.title}</h2>
              <h6>{item.description}</h6>
              <button
                className="buy-btn"
                onClick={() => handleBuyClick(item._id)}
              >
                Buy
              </button>
              <Link to={`/shop/${item._id}`} className="details">
                More Details
              </Link>
            </div>
          );
        })}
      </div>

      <h1 className="titles">Prints</h1>
      <div className="prints">
        {printFilteredItems.map((item) => {
          return (
            <div key={item._id} className="col-1">
              <img src={item.image_url} alt="" />
              <h2>{item.title}</h2>
              <h6>{item.description}</h6>
              <button
                className="buy-btn"
                onClick={() => handleBuyClick(item._id)}
              >
                Buy
              </button>
              <Link to={`/shop/${item._id}`} className="details">
                More Details
              </Link>
            </div>
          );
        })}
      </div>

      <h1 className="titles">Lenses</h1>
      <div className="lense">
        {lenseFilteredItems.map((item) => {
          return (
            <div key={item._id} className="col-1">
              <img src={item.image_url} alt="" />
              <h2>{item.title}</h2>
              <h6>{item.description}</h6>
              <button
                className="buy-btn"
                onClick={() => handleBuyClick(item._id)}
              >
                Buy
              </button>
              <Link to={`/shop/${item._id}`} className="details">
                More Details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;

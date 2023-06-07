import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ItemDetails.css";
import { useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const Navigate = useNavigate();

  function handleBuyClick(ItemId) {
    if (localStorage.getItem("token")) {
      Navigate(`/checkout?ItemId=${ItemId}`);
    } else {
      Navigate("/login");
    }
  }
  let { itemID } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getById();
  }, []);

  const getById = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/Items/${itemID}`,
      );
      setItem(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="container">
        <div className="card details-card ">
          <div className="row">
            <div>
              {item && <img src={item.image_url} alt="" />}
            </div>
            <div className=" description-container ">
              <div className="main-description">
                <div>
                  {item && <h3 className="product-title ">{item.title}</h3>}
                  {item && <p className="product-price">${item.price}</p>}
                </div>
                <hr />
                {item && (
                  <p className="product-description">{item.description}</p>
                )}
                <hr />
                <div>
                  {item && <p className="product-category">{item.category}</p>}
                  {item && (
                    <p className="product-stock">In stock:{item.stock} </p>
                  )}
                </div>
                {item && <p className="size">Size: {item.size}</p>}
                <button
                  className="buy-btn"
                  onClick={() => handleBuyClick(item._id)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

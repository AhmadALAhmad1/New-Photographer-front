import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/Checkout.css";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function Checkout() {
  //used to get the passed ItemId
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    street: "",
    building: "",
    Q: "",
    size: "",
    ItemId: "",
    total: "",
  });

  useEffect(() => {
    const calculateTotal = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/Items/${formData.ItemId}`
        );
        const itemPrice = data.data.price;
        const total = itemPrice * formData.Q;
        setFormData((prevState) => ({
          ...prevState,
          total,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    calculateTotal();
  }, [formData.Q, formData.size]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // fetch the item from the database
      const { data } = await axios.get(
        `http://localhost:5000/api/Items/${formData.ItemId}`
      );

      const itemPrice = data.data.price;
      const total = itemPrice * formData.Q;

      if (formData.Q > data.data.stock) {
        // Show an alert message if the entered quantity is not available in stock
        Swal.fire({
          title: "Error",
          text: "Not enough quantity available in stock!, Try less quantity ",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

      setFormData((prevState) => ({
        ...prevState,
        total,
      }));

      console.log("Submitting form data:", formData);

      // send the form data to the server
      const response = await axios.post(
        "http://localhost:5000/api/Orders/",
        formData
      );

      console.log("Server response:", response.data);

      // show success message
      Swal.fire({
        title: "Order placed successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const queryString = new URLSearchParams(location.search);
    const ItemId = queryString.get("ItemId");
    setFormData((prevState) => ({
      ...prevState,
      ItemId,
    }));
  }, [location.search]);

  return (
    <>
      <div className="title">
        <h1>Checkout</h1>
      </div>
      <div className="checkout-container">
        <form className="form-checkout" onSubmit={handleSubmit}>
          <div className="col1">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="col2">
            <label>
              State:
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Street:
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              building:
              <input
                type="text"
                name="building"
                value={formData.building}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Q:
              <input
                type="number"
                min={1}
                max={100}
                name="Q"
                value={formData.Q}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Size:
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              total:
              <input
                type="number"
                name="total"
                value={formData.total}
                onChange={handleChange}
                required
                disabled
              />
            </label>
            <button className="submit-btn-checkout" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;

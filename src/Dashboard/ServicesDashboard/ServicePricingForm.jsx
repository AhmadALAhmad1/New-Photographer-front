import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../constants";
import { PopupForm } from "../DashboardCommon/PopupForm.jsx";
import { UploadAndViewImage } from "../DashboardCommon/UploadAndDisplayImage";

export const ServicePricingForm = ({
  service = {},
  onSuccess,
  type,
  onError,
  visible,
}) => {
  const { id, title, description, price } = service;

  const [data, setData] = useState({
    title,
    description,
    price,
    image: null,
  });
  console.log("hizo", title);
  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("status", type);
    if (data.image) formData.append("image_url", data.image);

    if (id) {
      await axios({
        url: `${API_URL}/services/${id}`,
        data: formData,
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(onSuccess)
        .catch(onError);
    } else {
      await axios({
        url: `${API_URL}/services`,
        data: formData,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(onSuccess)
        .catch(onError);
    }
  };

  return (
    <PopupForm
      onSubmit={handleFormSubmit}
      header="Service Planning Form"
      visible={visible}
      formAction={id ? "Edit" : "Add"}
    >
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={data.title}
        onChange={(event) => setData({ ...data, title: event?.target?.value })}
      />

      {type === "customer" && (
        <>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={data.price}
            onChange={(event) =>
              setData({ ...data, price: event?.target?.value })
            }
          />
        </>
      )}

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={data.description}
        onChange={(event) =>
          setData({
            ...data,
            description: event?.target?.value,
          })
        }
      />
      {type === "customer" && (
        <UploadAndViewImage
          image={data.image}
          onChange={(image) =>
            setData({
              ...data,
              image,
            })
          }
        />
      )}
    </PopupForm>
  );
};

import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../constants.js";
import { PopupForm } from "./PopupForm";
import { UploadAndViewImage } from "./UploadAndDisplayImage";

export const ImageForm = ({
  imageSource = {},
  onSuccess,
  onError,
  visible,
}) => {
  const { id, height, width, section, page } = imageSource;
  const [data, setData] = useState({
    image: null,
    width,
    height,
    section,
    page,
  });
  

  console.log(data);
  const handleFormSubmit = async () => {
    const formData = new FormData();
    if (data.height) formData.append("height", data.height);
    if (data.width) formData.append("width", data.width);
    if (data.section) formData.append("section", data.section);
    if (data.page) formData.append("page", data.page);
    if (data.image) formData.append("image_url", data.image);
    if (id) {
      await axios({
        url: `${API_URL}/images/${id}`,
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
        url: `${API_URL}/images`,
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
      header="Image"
      visible={visible}
      formAction={id ? "Edit" : "Add"}
    >
      <UploadAndViewImage
        image={data.image}
        onChange={(image) => setData({ ...data, image })}
      />
    </PopupForm>
  );
};

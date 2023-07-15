import React, { useState } from "react";
import axios from "axios";
import "./AddImagePopup.css";

const AddImagePopup = ({ handleAddImageSubmit, handleClosePopup }) => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Architecture");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => formData.append("images", image));
    formData.append("category", selectedCategory);
    console.log("hello")

    try {
      const response = await axios.post(
        "https://jayy-pos5.onrender.com/api/gallery/photo/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      handleAddImageSubmit(response.data);
    } catch (error) {
      console.error(error);
    }
    handleClosePopup();
  };

  return (
    <div className="add-image-popup">
      <div className="add-image-popup-content">
        <h2>Add Image</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div className="category-select">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="Architecture">Architecture</option>
              <option value="Landscape">Commercial</option>
              <option value="Portrait">Ecommerce</option>
              <option value="fashion">fashion</option>
              <option value="Portrait">FineArt</option>
              <option value="Portrait">Jewellery</option>
              <option value="Portrait">portrait</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="popup-buttons">
            <button type="submit" className="popup-submit">
              Submit
            </button>
            <button
              type="button"
              className="popup-cancel"
              onClick={handleClosePopup}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImagePopup;

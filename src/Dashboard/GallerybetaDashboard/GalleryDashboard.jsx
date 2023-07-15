import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GalleryDashboard.css";
import Header from "../../components/Header";

const GalleryDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("CatID", selectedCategory);

    try {
      await axios.post(
        "https://jayy-pos5.onrender.com/api/gallery/photo/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setSelectedImage(null);
      setSelectedCategory("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://jayy-pos5.onrender.com/api/category/",
        );
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    fetchCategories();
    fetchImages();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://jayy-pos5.onrender.com/api/category",
      );
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://jayy-pos5.onrender.com/api/gallery/get",
      );
      setImages(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    filterImages(categoryId);
  };

  const filterImages = (categoryId) => {
    if (categoryId) {
      const filtered = images.filter((image) => image.category === categoryId);
      setFilteredImages(filtered);
    } else {
      setFilteredImages(images);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="gallery-dashboard-container">
        <h1>Gallery Dashboard</h1>
        <button className="pop-btn-dash" onClick={openPopup}>
          Add New Images
        </button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <form onSubmit={handleSubmit} className="gallery-dash-form">
                <div>
                  <label htmlFor="image">Select Image:</label>
                  <input
                    className="choose-file"
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageSelect}
                  />
                </div>
                <div>
                  <label htmlFor="category">Select Category:</label>
                  <select
                    className="select-cat"
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategorySelect}
                  >
                    <option value="">-- Select Category --</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="post-image" type="submit">
                  Post Image
                </button>
                <button onClick={closePopup} className="close-pop">
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="container-gallery">
        <div className="filters">
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => handleCategorySelect(category._id)}
              className={selectedCategory === category._id ? "active" : ""}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="image-grid">
          {filteredImages.map((image) => (
            <img key={image._id} src={image.image} className="gallery-image" />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryDashboard;

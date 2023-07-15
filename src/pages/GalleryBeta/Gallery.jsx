import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";
import Header from "../../components/Header";

const GalleryBeta = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchImages();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://jayy-pos5.onrender.com/api/category/",
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

      <div className="container-gallery">
        <h1>Gallery Page</h1>
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

export default GalleryBeta;

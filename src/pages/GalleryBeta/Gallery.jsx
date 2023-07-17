import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";
import AboutHeader from "../../components/About/AboutHeader/AboutHeader";
import image from "../../images/ba.jpg";
import Skeleton from "../../components/Loaders/SkeletonLoader/Skeleton.jsx"

const GalleryBeta = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchImages();
  }, []);

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

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://jayy-pos5.onrender.com/api/gallery/get",
      );
      setImages(response.data.data);
    } catch (error) {
      console.error(error);
    }
    
  };

  const handleCategorySelect = (categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    filterImages(categoryId);

    // Simulate loading for 5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
      <AboutHeader backgroundImage={image} />

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
          {isLoading ? (
            <>
              <Skeleton />
              <>
                <div className="gallery-image skeleton-loading"></div>
                <div className="gallery-image skeleton-loading"></div>
                <div className="gallery-image skeleton-loading"></div>
              </>
            </>
          ) : (
            // Show actual images
            filteredImages.map((image) => (
              <img
                key={image._id}
                src={image.image}
                className="gallery-image"
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryBeta;

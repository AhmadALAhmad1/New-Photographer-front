import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const ImageQuer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/images?section=1&page=home");
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={`data:image/png;base64,${image.image}`} alt="" />
      ))}
    </div>
  );
};

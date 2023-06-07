import React from "react";
import { useState, useEffect } from "react";
import { SideImage } from "../components/SideImage";
import photographerBckgrnd from "../images/photographer.jpg";
import axios from "axios";
import { API_URL } from "../constants";
import PhotoAlbum from "react-photo-album";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "../styles/Home.css";
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import { ImageForm } from "./DashboardCommon/ImageForm";
import "../styles/Dashboard.css";
import { PhotosGrid } from "../components/PhotosGrid";
import { GridPopupForm } from "../components/GridPopupForm";

export const HomeDashboard = () => {
  const [side_images, setSide_images] = useState([]);

  const getImages = () => {
    axios
      .get(`${API_URL}/images`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => getImages, []);
  console.log("side_images:", side_images);

  const photoAlbumImages = side_images
    .filter((img) => img.page === "home" && img.section === 2)
    .sort((a, b) => a.priority - b.priority)
    .map(({ id, image, x, y, width, height }, index) => ({
      i: id,
      x,
      y,
      w: width,
      h: height,
      image,
    }));
  console.log("photoAlbumImages:", photoAlbumImages);
  const photoDivided = side_images
    .filter((img) => img.page === "home" && img.section === 4)
    .sort((a, b) => a.priority - b.priority);

  console.log("photoDivided:", photoDivided);
  return (
    <div className="home">
      <div className="home-one">
        <AboutHeader backgroundImage={photographerBckgrnd} minHeight={"90vh"} />
      </div>
      <div className="home-two">
        <section className="section-1">
          {side_images
            .filter((img) => img.page === "home" && img.section === 1)
            .map((img) => (
              <>
                <SideImage
                  key={img.id}
                  image={img.image}
                  className="section-1-img img-form-edit"
                  width={img.width}
                  height={img.height}
                  containerWidth="70%"
                />
                <div>
                  <ImageForm imageSource={img} visible />
                </div>
              </>
            ))}
          <h1>To See More Images Check Our</h1>
          <Link to="./gallery" style={{ textDecoration: "none" }}>
            <h1>Gallery</h1>
          </Link>
        </section>
        {photoAlbumImages.length && (
          <section className="section-2">
            <GridPopupForm
              photos={photoAlbumImages}
              onSuccess={getImages}
              visible
            />
            <PhotosGrid
              key="photoGrid"
              photos={photoAlbumImages}
              itemEditable
            />
          </section>
        )}
      </div>
      <div className="home-three">
        <section className="section-3">
          {side_images
            .filter((img) => img.page === "home" && img.section === 3)
            .map((img) => (
              <>
                <SideImage
                  key={img.id}
                  image={img.image}
                  className="section-3-img img-form-edit"
                  width={img.width}
                  height={img.height}
                  containerWidth="60%"
                />
                <div>
                  <ImageForm imageSource={img} visible />
                </div>
              </>
            ))}
        </section>
        <section className="home-quote">
          <h1>
            “Capturing life's precious moments, one click at a time. Explore our
            stunning portfolio and book your session today!”
          </h1>
          <button
            onClick={() => (window.location = "tel:+96171569694")}
            className="button-book-me"
          >
            Book me
          </button>
        </section>
      </div>
      <div className="home-four">
        <div className="section-1">
          <ReactCompareSlider
            itemOne={
              <>
                <ReactCompareSliderImage
                  src={`data:image/jpeg;base64,${photoDivided[0]?.image}`}
                  alt="Image one"
                />
              </>
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`data:image/jpeg;base64,${photoDivided[1]?.image}`}
                alt="Image two"
              />
            }
          />
          {photoDivided && (
            <div className="compare-slider-buttons">
              {console.log(photoDivided[0])}
              <ImageForm
                imageSource={photoDivided[0]}
                key={photoDivided[0]?.id}
                visible
              />
              <ImageForm
                imageSource={photoDivided[1]}
                key={photoDivided[1]?.id}
                visible
              />
            </div>
          )}
        </div>
        <section className="home-quote">
          <h1>“We Sell Lightroom Presets”</h1>
          <button
            onClick={() => (window.location = "./shop")}
            className="button-book-me"
          >
            Buy Now
          </button>
        </section>
      </div>
      <div className="home-five">
        <section className="home-quote">
          <h1>“We Sell Prints”</h1>
          <button
            onClick={() => (window.location = "./shop")}
            className="button-book-me"
          >
            Buy Now
          </button>
        </section>
        <section className="section-5">
          {side_images
            .filter((img) => img.page === "home" && img.section === 5)
            .map((img) => (
              <>
                <SideImage
                  key={img.id}
                  image={img.image}
                  className="section-5-img img-form-edit"
                  width={img.width}
                  height={img.height}
                  containerWidth="65%"
                />
                <div>
                  <ImageForm imageSource={img} visible />
                </div>
              </>
            ))}
        </section>
      </div>
    </div>
  );
};

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
import { ImageDivider } from "../components/ImageDivider.jsx";
import "../styles/Home.css";
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import { PhotosGrid } from "../components/PhotosGrid";

export const Home = () => {
  const [side_images, setSide_images] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/images`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  }, []);
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
    }))
  console.log("photoAlbumImages:", photoAlbumImages);

  const photoDivided = side_images
    .filter((img) => img.page === "home" && img.section === 4)
    .sort((a, b) => a.priority - b.priority);
  // console.log("hii", photoDivided[0]?.image);

  console.log("photoDivided:", photoDivided);
  return (
    <div className="home">
      <div className="home-one">
        <AboutHeader backgroundImage={photographerBckgrnd} minHeight={"90vh"} />
        {/* <img
          src={photographerBckgrnd}
          alt="backgroundImage"
          className="HomeBackgrnd"
        /> */}
      </div>
      <div className="home-two">
        <section className="section-1">
          {side_images
            .filter((img) => img.page === "home" && img.section === 1)
            .map((img) => (
              <SideImage
                key={img.id}
                image={img.image}
                className="section-1-img"
                width={img.width}
                height={img.height}
                containerWidth="70%"
              />
            ))}
          <h1>To See More Images Check Our</h1>
          <Link to="./gallery" style={{ textDecoration: "none" }}>
            <h1>Gallery</h1>
          </Link>
        </section>
        {/* <section className="section-2">
          <PhotoAlbum
            layout="masonry"
            photos={photoAlbumImages}
            columns={3}
          />
        </section> */}
        {photoAlbumImages.length && (
          <section className="section-2">
            <PhotosGrid
            key='photoGrid'
              // layout="masonry"
              // photos={[photoAlbumImages[1], photoAlbumImages[0]]}
              photos={photoAlbumImages}
              // columns={3}
            />
          </section>
        )}
      </div>
      <div className="home-three">
        <section className="section-3">
          {side_images
            .filter((img) => img.page === "home" && img.section === 3)
            .map((img) => (
              <SideImage
                key={img.id}
                image={img.image}
                className="section-3-img"
                width={img.width}
                height={img.height}
                containerWidth="60%"
              />
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
        {/* <ImageDivider
          image1={photoDivided[0]}
          image2={photoDivided[1]?.image}
          containerWidth="50%"
          dividerColor="blue"
        /> */}
        <div className="section-1">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={`data:image/jpeg;base64,${photoDivided[0]?.image}`}
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`data:image/jpeg;base64,${photoDivided[1]?.image}`}
                alt="Image two"
              />
            }
          />
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
              <SideImage
                key={img.id}
                image={img.image}
                className="section-5-img"
                width={img.width}
                height={img.height}
                containerWidth="65%"
              />
            ))}
        </section>
      </div>
    </div>
  );
};

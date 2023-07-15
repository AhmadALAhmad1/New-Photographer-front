// import React from "react";
// import { useState } from "react";
// import { Fab, TextField, Button } from "@material-ui/core";
// import Alert from "@material-ui/lab/Alert";
// import { Add } from "@mui/icons-material";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const GalleryNavD = (props) => {
//   const [selected, setSelected] = useState("architecture");
//   const [showAlert, setShowAlert] = useState(false);
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(category);
//     const formData = new FormData();
//     formData.append("category", category);
//     formData.append("file", image);
//     console.log(formData);
//     try {
//       const response = await axios(
//         'http://jayy-pos5.onrender.com/api/gallery/photo/create',
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           data: formData,
//         },
//       );
//       console.log("kamola", response);
//       response && toast("Photo added successfully!");
//       setCategory("");
//       setImage("");
//     } catch (error) {
//       console.error(error);
//     }
//     setShowAlert(false);
//   };

//   const handleClickB = () => {
//     setShowAlert(true);
//   };

//   const handleClick = (type, event) => {
//     event.preventDefault();
//     setSelected(type);
//     props.handleSelectedCategory(type);
//   };

//   return (
//     <div className="nav" style={{ display: "flex", gap: "0" }}>
//       <ToastContainer
//         position="top-right"
//         autoClose={4910}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <div className="pbuttons">
//         <Fab
//           color="default"
//           aria-label="add"
//           onClick={handleClickB}
//           style={{ marginTop: "1rem", marginLeft: "4rem" }}
//         >
//           <Add fontSize="large" />
//         </Fab>
//         <button
//           className="pbutton"
//           onClick={(event) => handleClick("architecture", event)}
//           style={{ borderColor: selected === "architecture" ? "white" : "" }}
//         >
//           ARCHITECTURE
//         </button>
//         <button
//           className="pbutton"
//           onClick={(event) => handleClick("commercial", event)}
//           style={{ borderColor: selected === "commercial" ? "white" : "" }}
//         >
//           COMMERCIAL
//         </button>
//         <button
//           className="pbutton"
//           onClick={(event) => handleClick("ecommerce", event)}
//           style={{ borderColor: selected === "ecommerce" ? "white" : "" }}
//         >
//           ECOMMERCE
//         </button>
//         <button
//           className="pbutton"
//           onClick={(event) => handleClick("fashion", event)}
//           style={{ borderColor: selected === "fashion" ? "white" : "" }}
//         >
//           FASHION
//         </button>
//         <button
//           className="pbutton"
//           onClick={(event) => handleClick("fine art", event)}
//           style={{ borderColor: selected === "fine art" ? "white" : "" }}
//         >
//           FINE ART
//         </button>
//         <button
//           className="pbutton"
//           onClick={(event) => handleClick("jewellery", event)}
//           style={{ borderColor: selected === "jewellery" ? "white" : "" }}
//         >
//           JEWELLERY
//         </button>
//         <button
//           className="pbutton"
//           onClick={(event) => handleClick("portrait", event)}
//           style={{ borderColor: selected === "portrait" ? "white" : "" }}
//         >
//           PORTRAIT
//         </button>
//       </div>
//       {showAlert && (
//         <div
//           className="alert"
//           style={{ marginRight: "1rem", marginTop: "1rem" }}
//         >
//           <Alert severity="info">
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 label="Category"
//                 variant="outlined"
//                 margin="dense"
//                 onChange={(event) => setCategory(event.target.value)}
//               />
//               <div style={{ display: "flex", gap: "1rem" }}>
//                 <TextField
//                   type="file"
//                   variant="outlined"
//                   margin="dense"
//                   onChange={(event) => setImage(event.target.files[0])}
//                 />

//                 <Button type="submit">Submit</Button>
//               </div>
//             </form>
//           </Alert>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import axios from "axios";
import { GalleryHero } from "../../components/GalleryHero";
import { GalleryNav } from "../../components/GalleryNav";
import GalleryDashboardCard from "../GalleryDashborad/GalleryDashboardCard";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./GalleryNavD.css";
import Button from "@mui/material/Button";
import AddImagePopup from "./AddImagePopup";

const GalleryNavD = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Architecture");
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(1);
  const [showAddPopup, setShowAddPopup] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jayy-pos5.onrender.com/api/gallery/get",
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        setPhotos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredCards = photos.filter((item) => {
    return item.category === selectedCategory;
  });
  const cards = filteredCards.slice(0, 3).map((item) => {
    return (
      <GalleryDashboardCard
        key={item._id}
        image={item.image}
        category={item.category}
        onClick={() => setIsOpen(true)}
      />
    );
  });

  const handleAddButtonClick = () => {
    setShowAddPopup(true);
  };

  const handleAddImageSubmit = async (formData) => {
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
      setPhotos([...photos, response.data]);
    } catch (error) {
      console.error(error);
    }
    setShowAddPopup(false);
  };

  return (
    <div style={{ backgroundColor: "rgba(29,27,27,255)" }}>
      <GalleryHero />
      <div className="gallery-button-div">
        <button className="gallery-add-button" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
      <GalleryNav
        handleSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <section className="pcards-list" style={{ display: "flex" }}>
        {cards}
      </section>

      {isOpen && photos[imgIndex] && (
        <div>
          <Lightbox
            mainSrc={`data:image/jpeg;base64,${photos[imgIndex].image}`}
            nextSrc={`data:image/jpeg;base64,${
              photos[(imgIndex + 1) % photos.length].image
            }`}
            prevSrc={`data:image/jpeg;base64,${
              photos[(imgIndex + photos.length - 1) % photos.length].image
            }`}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setImgIndex((imgIndex + photos.length - 1) % photos.length)
            }
            onMoveNextRequest={() =>
              setImgIndex((imgIndex + 1) % photos.length)
            }
          ></Lightbox>
        </div>
      )}

      {/* Add Image Popup */}
      {showAddPopup && (
        <AddImagePopup
          handleAddImageSubmit={handleAddImageSubmit}
          handleClosePopup={() => setShowAddPopup(false)}
        />
      )}
    </div>
  );
};

export default GalleryNavD;

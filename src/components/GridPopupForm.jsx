import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../constants";
import { PhotosGrid } from "./PhotosGrid.jsx";
import { PopupForm } from "../Dashboard/DashboardCommon/PopupForm";
import Popup from "reactjs-popup";

export const GridPopupForm = ({ photos = [], onSuccess, onError, visible }) => {
  const [items, setItems] = useState(photos);
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = async () => {
    await items.forEach(async (item) => {
      await axios({
        url: `${API_URL}/images/${item.i}`,
        data: {
          x: item.x,
          y: item.y,
          height: item.h,
          width: item.w,
        },
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(onSuccess)
        .catch(onError);
      setIsOpen(false);
    });
  };

  return (
    // <PopupForm
    //   popupWidth={"800 px"}
    //   onSubmit={handleFormSubmit}
    //   header="Image"
    //   visible={visible}
    //   formAction={"Edit Positions"}
    // >
    //   <div style={{ width: "45vw", height: 1200 }}>
    //     <PhotosGrid
    //       photos={photos}
    //       onEdit={(layouts) => {
    //         setItems(layouts);
    //       }}
    //     />
    //   </div>
    // </PopupForm>
    <>
      <button className="button-danger " onClick={() => setIsOpen(true)}>
        Edit Positions
      </button>
      <Popup open={isOpen} onClose={() => setIsOpen(false)} modal>
        <div className="popUpForm">
          <div className="buttons-form">
            <button
              type="button"
              onClick={handleFormSubmit}
              className="button-danger"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="button-edit"
            >
              Cancel
            </button>
          </div>
          <div style={{ width: "45vw", height: 1200 }}>
            <PhotosGrid
              photos={photos}
              onEdit={(layouts) => {
                setItems(layouts);
              }}
            />
          </div>
        </div>
      </Popup>
    </>
  );
};

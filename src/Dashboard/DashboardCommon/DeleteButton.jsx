import axios from "axios";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import { API_URL } from "../../constants"

export const DeleteButton = ({
  path,
  deleteHeader = "Are you sure?",
  onSuccess,
  onError,
  visible,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!visible) return null;

  const handleFormSubmit = async () => {
    await axios({
      url: `${API_URL}${path}`,
      method: "DELETE",
    })
      .then(onSuccess)
      .catch(onError);

    setIsOpen(false);
  };

  return (
    <>
      <button
        className="button-edit"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </button>
      <Popup open={isOpen} onClose={() => setIsOpen(false)} modal>
        <div className="popUpForm">
          <h2>{deleteHeader}</h2>
          {children}
          <div className="buttons-form">
            <button
              type="button"
              onClick={handleFormSubmit}
              className="button-edit"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="button-edit"
            >
              Cancel
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
};

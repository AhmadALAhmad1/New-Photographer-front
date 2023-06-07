import React, { useState } from "react";
import Popup from "reactjs-popup";

export const PopupForm = ({
  formAction,
  buttonClassName = "button-danger",
  formHeader,
  onSubmit,
  visible,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!visible) return null;

  const handleFormSubmit = async () => {
    try {
      await onSubmit();

      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className={buttonClassName} onClick={() => setIsOpen(true)}>
        {formAction}
      </button>
      <Popup open={isOpen} onClose={() => setIsOpen(false)} modal>
        <div className="popUpForm">
          <h2>{formHeader}</h2>
          <form onSubmit={handleFormSubmit} className="form-data">
            {children}
            <div className="buttons-form">
              <button type="submit" className="button-danger">
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
          </form>
        </div>
      </Popup>
    </>
  );
};

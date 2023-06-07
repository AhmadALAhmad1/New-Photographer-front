import React from "react";

export const Form = ({ header, className, onSubmit, onCancel, children }) => {
  return (
    <div className={className}>
      <h2>{header}</h2>
      <form onSubmit={onSubmit} className="form-data">
        {children}
        <div className="buttons-form">
          <button type="submit" className="button-form">
            Submit
          </button>
          <button type="button" onClick={onCancel} className="button-form">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

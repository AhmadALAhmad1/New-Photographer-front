import React from "react";

export const UploadAndViewImage = ({ image, onChange }) => {
  return (
    <div className="upload-and-view">
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          value={!image ? "" : undefined}
          onChange={(event) => onChange(event.target.files[0])}
        />
      </div>
      {image && (
        <div className="upload-and-view-img">
          <img src={URL.createObjectURL(image)} alt="uploaded" width="50%" />
          <button type="button" onClick={() => onChange(null)}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

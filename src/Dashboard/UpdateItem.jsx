import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateItem.css";

const UpdateItem = () => {
  const { itemID } = useParams();
  const navigate = useNavigate();

  const [Items, setItems] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    size: "",
    stock: "",
    image: "",
    category: "",
  });

  const updateItem = async (itemID, updatedItemData) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedItemData.title);
      formData.append("description", updatedItemData.description);
      formData.append("price", updatedItemData.price);
      formData.append("size", updatedItemData.size);
      formData.append("stock", updatedItemData.stock);
      formData.append("category", updatedItemData.category);
      if (imageFile) {
        formData.append("image_url", imageFile);
      }

      const response = await axios.put(
        `http://localhost:5000/api/Items/${itemID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      const updateItem = response.data;
      console.log(updateItem);
      navigate("/adminshop");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await updateItem(itemID, formData);
  };

  useEffect(() => {
    const getById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/Items/${itemID}`,
        );
        const item = response.data.data;
        setFormData({
          title: item.title,
          description: item.description,
          price: item.price,
          size: item.size,
          stock: item.stock,
          category: item.category,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getById();
  }, [itemID]);
  return (
    <form onSubmit={formSubmit} className="form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />

      <label htmlFor="description">description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="size">size</label>
      <input
        type="text"
        id="size"
        name="size"
        value={formData.size}
        onChange={handleInputChange}
      />

      <label htmlFor="stock">stock</label>
      <input
        type="text"
        id="stock"
        name="stock"
        value={formData.stock}
        onChange={handleInputChange}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      <label htmlFor="category">category</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
      />

      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItem;

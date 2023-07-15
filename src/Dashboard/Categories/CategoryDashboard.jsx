import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryDashboard.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CategoryDashboard = () => {
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [updateCategoryId, setUpdateCategoryId] = useState(null);
  const [updateCategoryName, setUpdateCategoryName] = useState("");

  useEffect(() => {
    getAllCat();
  }, []);

  useEffect(() => {
    setFilteredCategories(
      category.filter(
        (category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (filter === "" || category === filter),
      ),
    );
  }, [searchQuery, category, filter]);

  // GET ALL
  const getAllCat = async () => {
    try {
      const response = await axios.get(`https://jayy-pos5.onrender.com/api/category/`);
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteCategory = async (category) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure to delete ${category.name}?`,
        showCancelButton: true,
      });

      if (result.isConfirmed) {
        await axios.delete(
          `https://jayy-pos5.onrender.com/api/category/${category._id}`,
        );
        getAllCat(); // when finished deleting, call products again to refresh
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ADD CATEGORY
  const addCategory = async () => {
    try {
      await axios.post("https://jayy-pos5.onrender.com/api/category/", {
        name: newCategory,
      });
      getAllCat();
      setNewCategory("");
      setShowAddCategory(false);
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE CATEGORY
  const updateCategory = async () => {
    try {
      await axios.put(`https://jayy-pos5.onrender.com/api/category/${updateCategoryId}`, {
        name: updateCategoryName,
      });
      getAllCat();
      setUpdateCategoryId(null);
      setUpdateCategoryName("");
    } catch (error) {
      console.log(error);
    }
  };

  // RENDER UPDATE FORM
  const renderUpdateForm = (category) => {
    return (
      <div className="update-category-pop-up">
        <input
          type="text"
          placeholder="Category name"
          value={updateCategoryName}
          onChange={(e) => setUpdateCategoryName(e.target.value)}
        />
        <button onClick={updateCategory}>Update</button>
        <button onClick={() => setUpdateCategoryId(null)}>Cancel</button>
      </div>
    );
  };

  return (
    <>
      <div className="add-category-container">
        <button
          className="btn-add"
          onClick={() => setShowAddCategory(!showAddCategory)}
        >
          ADD New category
        </button>
        {showAddCategory && (
          <div className="add-category-pop-up">
            <input
              type="text"
              placeholder="New category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button onClick={addCategory}>Submit</button>
          </div>
        )}
      </div>
      <div>
        <div className="container">
          <h1 className="items-h1">Category Table</h1>
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search by title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div id="table-container-admin">
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredCategories.map((category, key) => {
                  return (
                    <tr key={category._id}>
                      <td>{category.name}</td>

                      <td>
                        {updateCategoryId === category._id ? (
                          renderUpdateForm(category)
                        ) : (
                          <>
                            <button
                              className="action-button-update"
                              onClick={() => setUpdateCategoryId(category._id)}
                            >
                              Update
                            </button>
                            <button
                              className="action-button-delete"
                              onClick={() => {
                                deleteCategory(category);
                              }}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDashboard;

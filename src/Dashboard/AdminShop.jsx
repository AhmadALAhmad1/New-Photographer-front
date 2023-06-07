import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminShop.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AdminShop = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (filter === "" || item.category === filter),
      ),
    );
  }, [searchQuery, items, filter]);

  // GET ALL
  const getAllItems = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/Items/");
      setItems(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteItem = async (item) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure to delete ${item.title}?`,
        showCancelButton: true,
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/api/Items/${item._id}`);
        getAllItems(); // when finished deleting, call products again to refresh
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to={"/adminshop/add"} className="btn-add">
        ADD New Item
      </Link>
      <div>
        <div className="container">
          <h1 className="items-h1">ITEMS Table</h1>
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search by title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="select-items"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All categories</option>
              <option value="boom">Boom</option>
              <option value="prints">Prints</option>
              <option value="lense">Lense</option>
            </select>
          </div>
          <div id="table-container-admin">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>description</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Stock</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredItems.map((item, key) => {
                  return (
                    <tr key={item._id}>
                      <td>{key + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.size}</td>
                      <td>{item.stock}</td>
                      <td>
                        <img src={item.image_url} />
                      </td>
                      <td>{item.category}</td>
                      <td>
                        <button
                          className="action-button-update"
                          onClick={() =>
                            (window.location.href = `/adminshop/update/${item._id}`)
                          }
                        >
                          Update
                        </button>

                        <button
                          className="action-button-delete"
                          onClick={() => {
                            deleteItem(item);
                          }}
                        >
                          Delete
                        </button>
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

export default AdminShop;

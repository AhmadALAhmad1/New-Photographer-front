import "./Orders.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminShop.css";
import Swal from "sweetalert2";

export const Orders = () => {
  const [order, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  // GET ALL
  const getAllOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/Orders/");
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteOrder = async (order) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure to delete ${order.title}?`,
        showCancelButton: true,
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/api/Orders/${order._id}`);
        getAllOrders(); // when finished deleting, call products again to refresh
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <h1 className="items-h1">Orders Table</h1>

          <div id="table-container-admin">
            <table>
              <thead>
                <tr>
                  <th>ID</th>

                  <th>firstName</th>
                  <th>lastName</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>Address</th>
                  <th>Quantity</th>
                  <th>size</th>
                  <th>TOTAL</th>
                  <th>Item Name</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {order &&
                  order.map((order, key) => {
                    return (
                      <tr key={order._id}>
                        <td>{key + 1}</td>
                        <td>{order.firstName}</td>
                        <td>{order.lastName}</td>
                        <td>{order.email}</td>
                        <td>{order.phone}</td>
                        <td>
                          <b>country:</b>
                          {order.country}
                          <br />
                          <b>City:</b>
                          {order.city}
                          <br />
                          <b>state:</b>
                          {order.state}
                          <br />
                          <b>street:</b>
                          {order.street}
                          <br />
                          <b>building:</b>building:
                          {order.building}
                          <br />
                        </td>
                        <td>{order.Q}</td>
                        <td>{order.size}</td>

                        <td>{order.total}</td>

                        <td>{order.ItemId?.title}</td>

                        <td>
                          <button
                            className="action-button-delete"
                            onClick={() => {
                              deleteOrder(order);
                            }}
                          >
                            Delete
                          </button>
                          <div>
                            <label htmlFor="status">Status:</label>
                            <select id="status">
                              <option>Pending</option>
                              <option>Delivered</option>
                            </select>
                          </div>
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


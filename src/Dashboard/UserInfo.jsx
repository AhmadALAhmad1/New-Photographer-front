import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./UserInfo.css";

const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  //GET ALL
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/users/getall",
      );
      setUsers(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE
  const handleDeleteUser = async (user) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure to delete ${user.username}?`,
        showCancelButton: true,
      });
      if (result.isConfirmed) {
        await axios.delete(
          `http://localhost:5000/api/users/delete/${user._id}`,
        );
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div>
        <div className="container">
          <h1 className="users-h1">Users Table</h1>
          <div id="table-container">
            <input
              type="text"
              placeholder="Search by username or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user, key) => {
                  return (
                    <tr key={user._id}>
                      <td>{key + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button onClick={() => handleDeleteUser(user)}>
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

export default UserInfo;

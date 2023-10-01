import React, { useState, useEffect } from "react";
import fetchUsers from "../api/Users";

const UsersModule = () => {
  const [users, setUsers] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(4);

  useEffect(() => {
    fetchUsers(selectedQuantity).then((users) => setUsers(users));
  }, [selectedQuantity]);

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  return (
    <div className="users-module">
      <h1>Users</h1>
      <div className="container">
        <label htmlFor="selectedQuantity">Number of users to display:</label>
        <select
          id="selectedQuantity"
          value={selectedQuantity}
          onChange={handleQuantityChange}
          className="form-select"
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>

        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <div className="user-details">
                <span className="label">Name:</span>
                <span className="value">{user.name}</span>
              </div>
              <div className="user-details">
                <span className="label">Email:</span>
                <span className="value">{user.email}</span>
              </div>
              <div className="user-details">
                <span className="label">Phone:</span>
                <span className="value">{user.phone}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersModule;

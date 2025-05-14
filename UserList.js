import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css"; // Optional styling

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>Users</h1>
      <ul className="user-list">
        {listOfUser.map((user) => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

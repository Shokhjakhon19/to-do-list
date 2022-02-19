import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../../assets/style/Main.css";

import ToDoList from "../../components/ToDoList/index";
import Loader from '../../components/Loader/index'

const Home = () => {
  const { state } = useLocation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        const filteredData = resp.data.map((item) => ({
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          website: item.website,
          phone: item.phone,
        }));
        console.log("Filtered data", filteredData);
        setUsers(filteredData);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <Loader />;
  return (
    <div className="home">
      <div className="p-10 flex flex-wrap gap-5 justify-center">
        <table className="table">
          <thead>
            <tr className="table">
              <th>#</th>
              <th>First Name</th>
              <th>User Email</th>
              <th>Website</th>
              <th>Phone</th>
              <th>username</th>
            </tr>
          </thead>

          {users.map((item, idx) => (
            <ToDoList item={item} key={item.id} />
          ))}
          {state}
        </table>
      </div>
    </div>
  );
};

export default Home;

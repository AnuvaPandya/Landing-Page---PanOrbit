import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const handleUsersList = () => {
    axios.post("https://panorbit.in/api/users.json").then((response) => {
      setData(response.data.users);
      setLoading(false);
      console.log(response.data.users);
    }).catch = (error) => {
      console.log("Something went wrong!");
      setData([]);
      setLoading(false);
    };
  };
  return (
    <div>
      <button style={{ color: "white" }} onClick={handleUsersList}>
        List
      </button>
      {data.map((item, id) => {
        return (
          <div>
            <tr
              key={id}
              onClick={() => navigate("../profile-page", { replace: true })}
            >
              <td>{item.profilepicture}</td>
              <td>{item.name}</td>
            </tr>
          </div>
        );
      })}

      <Routes>
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default Home;

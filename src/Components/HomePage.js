import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(
    (axios.post("https://panorbit.in/api/users.json").then((response) => {
      setData(response.data.users);
      setLoading(false);
      console.log(response.data.users);
    }).catch = (error) => {
      console.log("Something went wrong!");
      setData([]);
      setLoading(false);
    }),
    []
  );

  // };
  return(
  // loading ? (
  //   "Loading..."
  // ) : error ? (
  //   "Something went wrong!"
  // ) : (
    <div className="home">
      {data.map((item, id) => {
        return (
          <div>
            <div
              key={id}
              onClick={() => navigate(`../profile-page/`, { replace: true })}
            >
              <img
                className=".home-img"
                src={item.profilepicture}
                alt="Profile-Picture"
                height={50}
                width={50}
              />
              <div className="home-name">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

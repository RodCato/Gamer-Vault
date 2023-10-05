import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/gameindex?search=${encodeURIComponent(searchTerm)}`);
  };


  return (
    <>
      <div className="home-page">
        <div className="bubble" class="hidden sm">
          <Link to="/aboutus">
            <img
              src={require("../assets/pixel-speech-bubble.png")}
              alt="bubble"
            />
          </Link>
        </div>
        <div className="ness">
          <img src={require("../assets/ness.png")} alt="Ness" />
        </div>
        <div className="text-container">
          <h1>GAMER VAULT</h1>
        </div>
      </div>
        <SearchComponent handleSearch={handleSearch} />
        <Footer />
    </>
  );
};

export default Home;

import React from "react";
import "../styles/home.css"; // 👈 lowercase and correct path


const Home = () => {
  return (
    <div className="hero">
      <div className="hero-card">
        <img
          className="hero-image"
          src="./assets/main.png.jpg"
          alt="Card"
        />
        <div className="hero-overlay">
          <div className="hero-content">
           
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;



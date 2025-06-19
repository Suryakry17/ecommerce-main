import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Brand */}
        <div className="navbar-brand">
          <NavLink to="/" className="brand-link">
            Shopify Clone
          </NavLink>
        </div>

        {/* Menu Links */}
        <ul className="navbar-menu">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/product" className="nav-link">Products</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>

        {/* Buttons */}
        <div className="navbar-buttons">
          <NavLink to="/login" className="btn-nav">Login</NavLink>
          <NavLink to="/register" className="btn-nav">Register</NavLink>
          <NavLink to="/cart" className="btn-nav">Cart ({state.length})</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

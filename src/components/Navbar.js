import React from 'react';
import { Link } from 'react-router-dom';
// import "./NavbarStyle.css";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <img src={require("../logo.png")} alt="" />
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            Reeds
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/Home">Home</Link>
          <Link to="/Deals">Deals</Link>
          <Link to="/SignUp">SignUp/Login</Link>
        </div>
      </div>
    </>
  )
}

import "./Navbar.scss";
import logoImage from "../../Assets/Logo/Logo-brainflix.svg";
import avatarImage from "../../Assets/Images/Mohan-muruge.jpg";
import React, { Component } from "react";

function Logo() {
  return (
    <div className="header">
      <img className="header__image" src={logoImage} alt="" />
      <div className="search">
        <input
          className="search__input"
          type="text"
          id="Search"
          placeholder="Search"
        />
      </div>

      <div className="logos">
        <button className="navbar__upload"> UPLOAD </button>
        <img className="avatar__image" src={avatarImage} alt="" />
      </div>
    </div>
  );
}

export default Logo;

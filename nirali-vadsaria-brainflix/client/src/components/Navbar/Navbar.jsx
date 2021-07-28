import "./Navbar.scss";
import logoImage from "../../Assets/Logo/Logo-brainflix.svg";
import avatarImage from "../../Assets/Images/Mohan-muruge.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header">
      <Link className="header__link" to={"/video/1af0jruup5gu"}>
        <div className="header__wrapper">
          <img className="header__image" src={logoImage} alt="logo-image" />
        </div>
      </Link>
      <div className="search">
        <input
          className="search__input"
          type="text"
          id="Search"
          placeholder="Search"
        />
      </div>

      <div className="logos">
        <Link to={"/video/upload"}>
          <button className="navbar__upload"> UPLOAD </button>
        </Link>
        <img className="avatar__image" src={avatarImage} alt="avatar-image" />
      </div>
    </div>
  );
}

export default Logo;

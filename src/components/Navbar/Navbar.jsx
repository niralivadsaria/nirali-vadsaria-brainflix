import "./Navbar.scss";
import logoImage from "../../Assets/Logo/Logo-brainflix.svg";
import avatarImage from "../../Assets/Images/Mohan-muruge.jpg";
import React, { Component } from "react";

function Logo() {
  return (
    <div class="header">
      <img class="header__image" src={logoImage} alt="" />
      <div class="search">
        <input
          class="search__input"
          type="text"
          id="Search"
          placeholder="Search"
        />
      </div>

      <div class="logos">
        <button class="navbar__upload"> UPLOAD </button>
        <img class="avatar__image" src={avatarImage} alt="" />
      </div>
    </div>
  );
}

export default Logo;

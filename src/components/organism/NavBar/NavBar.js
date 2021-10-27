import React from "react";
import "./navbar.scss";

const prefix = "o-navbar"; //El prefix sirve para manejar la metodologia BEM

const NavBar = () => {
  return (
    <header className={prefix}>
      <nav className={`${prefix}__nav`}>
        <a>HOME</a>
        <a>PAGE</a>
        <a>SHOP</a>
        <a>BLOG</a>
        <a>CONTACT US</a>
      </nav>
      <h1 className={`${prefix}__logo`}>bixbang.</h1>
      <div className={`${prefix}__botones`}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </header>
  );
};

export default NavBar;

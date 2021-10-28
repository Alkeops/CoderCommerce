import React from "react";

import { FlexComponent } from "components/templates";
import { NavbarButtons, NavbarLinks } from "components/molecules/Navbar";

const prefix = "o-navbar"; //El prefix sirve para manejar la metodologia BEM

const Navbar = () => {
  return (
    <header className={prefix}>
      <NavbarLinks />
      <h1 className={`${prefix}__logo`} style={{cursor: 'pointer'}}>bixbang.</h1>
    <NavbarButtons />
    </header>
  );
};

export default Navbar;

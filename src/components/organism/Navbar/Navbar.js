import React, { useState } from "react";

import { FlexComponent } from "components/templates";
import { NavbarButtons, NavbarLinks } from "components/molecules/Navbar";

const prefix = "o-navbar"; //El prefix sirve para manejar la metodologia BEM

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className={prefix}>
      <NavbarLinks active={menuActive} />
      <h1 className={`${prefix}__logo`} style={{ cursor: "pointer" }}>
        bixbang.
      </h1>
      <NavbarButtons
        toggleMenu={() => setMenuActive(!menuActive)}
        active={menuActive}
      />
    </header>
  );
};

export default Navbar;

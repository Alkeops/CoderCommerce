import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { FlexComponent } from "components/templates";

const prefix = "m-navbar-links";

const NavbarLinks = ({ active }) => {
  const classForComponent = classNames(prefix, { "is-active": active });
  return (
    <nav className={classForComponent}>
      {/*/ Esto va a cambiar en proximos capitulos*/}

      <a>HOME</a>
      <a>PAGE</a>
      <a>SHOP</a>
      <a>BLOG</a>
      <a>CONTACT US</a>
    </nav>
  );
};

NavbarLinks.propTypes = {
  menuActive: PropTypes.bool,
};

export default NavbarLinks;

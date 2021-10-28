import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";


const prefix = "m-navbar-links";

const NavbarLinks = ({ active }) => {
  const classForComponent = classNames(prefix, { "is-active": active });
  return (
    <nav className={classForComponent}>
      {/*/ Esto va a cambiar en proximos capitulos*/}

      <a href="/home">HOME</a>
      <a href="/page">PAGE</a>
      <a href="/shop">SHOP</a>
      <a href="/blog">BLOG</a>
      <a href="/contact">CONTACT US</a>
    </nav>
  );
};

NavbarLinks.propTypes = {
  menuActive: PropTypes.bool,
};

export default NavbarLinks;

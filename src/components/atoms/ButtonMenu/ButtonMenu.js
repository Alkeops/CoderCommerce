import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
const prefix = "a-button-menu";

const ButtonMenu = ({ active, toggle, ...props }) => {
  const classForComponent = classNames(prefix, {"is-open": active});
  return (
    <button className={classForComponent} onClick={toggle} {...props}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

ButtonMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ButtonMenu;

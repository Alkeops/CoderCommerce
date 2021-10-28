import React from "react";
import PropTypes from "prop-types";

import { MyAwesomeIcons } from "components/atoms";

const prefix = "a-cart-button";
const CartButton = ({onClick}) => (
  <button className={prefix} onClick={onClick}>
    <span className={`${prefix}__qty`}>10</span>
    <MyAwesomeIcons className={`${prefix}__svg`} icon="cart" size={21} />
  </button>
);

CartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CartButton;

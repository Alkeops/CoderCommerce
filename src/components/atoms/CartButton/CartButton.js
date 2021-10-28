import React from "react";

import { MyAwesomeIcons } from "components/atoms";
const prefix = "a-cart-button";
const CartButton = () => (
  <button className={prefix}>
    <span className={`${prefix}__qty`}>10</span>
    <MyAwesomeIcons className={`${prefix}__svg`} icon="cart" size={21} />
  </button>
);

export default CartButton;

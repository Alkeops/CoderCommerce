import React from "react";
import PropTypes from "prop-types";

import { FlexComponent } from "components/templates";
import { MyAwesomeIcons, Button, ButtonMenu } from "components/atoms";
import CartItems from "./CartItems";

const NavbarButton = ({ toggleMenu, active }) => (
  <FlexComponent>
    <Button
      onClick={() => {}}
      content={<MyAwesomeIcons icon="search" size={20} />}
      variant="navbar"
    />
    <Button
      onClick={() => {}}
      content={<MyAwesomeIcons icon="compare" size={22} />}
      variant="navbar"
    />
    <Button
      onClick={() => {}}
      content={<MyAwesomeIcons icon="user" size={22} />}
      variant="navbar"
    />
    <CartItems />
    <ButtonMenu toggle={toggleMenu} active={active} />
  </FlexComponent>
);

export default NavbarButton;

NavbarButton.propTypes = {
  toggleMenu: PropTypes.func,
};

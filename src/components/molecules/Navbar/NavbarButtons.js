import React from "react";
import PropTypes from "prop-types";

import { MyAwesomeIcons, Button, ButtonMenu } from "components/atoms";
import { FlexComponent } from "components/templates";

const NavbarButton = ({toggleMenu, active}) => (
  <FlexComponent>
    <Button
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
    <Button
      onClick={() => {}}
      content={<MyAwesomeIcons icon="cart" size={21} />}
      variant="navbar"
    />
    <ButtonMenu toggle={toggleMenu} active={active} />
  </FlexComponent>
);

export default NavbarButton;

NavbarButton.propTypes = {
  toggleMenu: PropTypes.func
}

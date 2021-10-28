import React from "react";
import PropTypes from "prop-types";

import { MyAwesomeIcons, Button } from "components/atoms";
import { FlexComponent } from "components/templates";

const NavbarButton = ({}) => (
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
    <Button
      onClick={() => {}}
      content={<MyAwesomeIcons icon="cart" size={21} />}
      variant="navbar"
    />
  </FlexComponent>
);

export default NavbarButton;

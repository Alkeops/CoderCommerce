import React from "react";

import { FlexComponent } from "components/templates";

const NavbarLinks = ({}) => (
  <nav>
    {/*/ Esto va a cambiar en proximos capitulos*/}
    <FlexComponent gap={40}>
      <a>HOME</a>
      <a>PAGE</a>
      <a>SHOP</a>
      <a>BLOG</a>
      <a>CONTACT US</a>
    </FlexComponent>
  </nav>
);

export default NavbarLinks;

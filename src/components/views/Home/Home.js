import React from "react";

import { UserLayout } from "components/templates";
import { Slider } from "components/organism";
const Home = () => (
  <UserLayout>
    <div style={{padding: "20px var(--padding-general)"}}>
      <Slider />
    </div>
  </UserLayout>
);

export default Home;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Navbar, Scrollbar } from "components/organism";
const prefix = "t-user-layout";
const UserLayout = ({ children }) => {
  const classForComponent = classNames(prefix, {});
  return (
    <div className={classForComponent}>
      <Navbar />
      <main className={`${prefix}__main`}>
        <Scrollbar disableTracksWidthCompensation>{children}</Scrollbar>
      </main>
      <footer className={`${prefix}__footer`}> coder; </footer>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;

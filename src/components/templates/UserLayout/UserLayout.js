import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "components/organism";

const UserLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <footer
      style={{
        width: "100%",
        background: "var(--color-gris-oscuro)",
        height: 40,
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-blanco)",
        position: "absolute",
        bottom: 0,
      }}
    >
      {" "}
      coder;{" "}
    </footer>
  </>
);

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;

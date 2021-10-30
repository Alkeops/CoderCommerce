import React from "react";
import PropTypes from "prop-types";

const Slide = ({ title, color, visible }) => {
  return (
    <div
      style={{
        background: color,
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: visible ? 1 :0,
        transition: "2s"
      }}
    >
      {title}
    </div>
  );
};

Slide.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Slide;

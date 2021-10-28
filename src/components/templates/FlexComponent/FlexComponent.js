import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
//classnames es una utilidad que permite unir clases por condicionales, realmente
//solo es una funcion que literalmente pesa 1.4kb pero muy util
//pueden leer más aqui https://www.npmjs.com/package/classnames

const prefix = "t-flexcomponent";

const FlexComponent = ({ isVertical, gap, children }) => {
  //Le digo a classnames que la clase se va a conformar por
  //el prefijo en este caso "t-flexcomponent" y además
  //la clase "t-flexcomponent--vertical" solo si el valor isVertical es truthy
  const classForComponent = classNames(prefix, {
    [`${prefix}--vertical`]: isVertical,
  });
  return (
    <div className={classForComponent} style={{ gap: gap }}>
      {children}
    </div>
  );
};

FlexComponent.propTypes = {
  isVertical: PropTypes.bool,
  gap: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default FlexComponent;

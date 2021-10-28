import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

const prefix = "a-button";

const Button = ({
  rightContent,
  leftContent,
  content,
  variant,
  onClick,
  ...props
}) => {
  const classForComponent = classNames(prefix, {
    [`${prefix}--${variant}`]: variant,
  }); //Si variant existe y es = success (por ejemplo), generaria la clase a-button--succes
  return (
    <button className={classForComponent} onClick={onClick} {...props}>
      {leftContent}
      {typeof content == "string" ? (
        <span className={`${prefix}__span`}>{content}</span> //Especificamente si es tipo string lo pongo en un span para no tener que mandar otras etiquetas por props
      ) : (
        content
      )}
      {rightContent}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  rightContent: PropTypes.node,
  leftContent: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired, //Uno de esos dos tipos o un nodo o texto plano ademas es requerido
  variant: PropTypes.string.isRequired,
};

export default Button;

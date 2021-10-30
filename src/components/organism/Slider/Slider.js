import React from "react";
import classNames from "classnames";

const prefix = "o-slider";

const Slider = () => {
  const classForComponent = classNames(prefix, {});
  return (
    <div className={classForComponent}>
      <span>Aqui puede ir una diapositiva</span>
    </div>
  );
};
export default Slider;

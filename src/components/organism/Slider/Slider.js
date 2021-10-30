import React, { useState, useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import Slide from "./Slide";

const prefix = "o-slider";
const fakeSlide = [
  { title: "Slide 1", color: "#95b49d" },
  { title: "Slide 2", color: "#b49595" },
  { title: "Slide 3", color: "#959fb4 " },
  { title: "Slide 4", color: " #b495b0" },
  { title: "Slide 5", color: "#95b3b4" },
  { title: "Slide 6", color: "#b4a695 " },
];
const Slider = () => {
  const [index, setIndex] = useState(0);
  const classForComponent = classNames(prefix, {});
  const timer = useRef(null);
  const resetTimer = () =>
    timer.current ? clearTimeout(timer.current) : false;
  const startTimer = useCallback(() => (timer.current = setTimeout(handleSlide, 4000)),[]);

  useEffect(() => {
    resetTimer();
    startTimer();
    return () => resetTimer();
  }, [index, startTimer]);

  const handleSlide = () => {
    setIndex((prev) => (prev === fakeSlide.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className={classForComponent} onMouseEnter={resetTimer} onMouseLeave={startTimer}>
      {fakeSlide.map((props, i) => (
        <Slide
          key={`algo-significativo--${i}`}
          visible={index === i}
          {...props}
        />
      ))}
      <button
        onClick={handleSlide}
        style={{ position: "relative", zIndex: 999999999 }}
      >
        Presiona
      </button>
    </div>
  );
};
export default Slider;

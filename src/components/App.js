import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = useState(0);
  let nextBtnDisable = false;
  if (index === 4) nextBtnDisable = true;
  let prevBtnDisable = false;
  if (index === 0) prevBtnDisable = true;
  const slideNext = () => {
    if (index < 4) setIndex((index) => index + 1);
  };
  const slidePrev = () => {
    if (index > 0) setIndex((index) => index - 1);
  };
  const restart = () => {
    if (index > 0) setIndex(0);
  };
  return (
    <React.Fragment>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
      <button
        data-testid="button-next"
        onClick={slideNext}
        disabled={nextBtnDisable}
      >
        Next
      </button>
      <button
        data-testid="button-prev"
        onClick={slidePrev}
        disabled={prevBtnDisable}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        onClick={restart}
        disabled={prevBtnDisable}
      >
        Restart
      </button>
    </React.Fragment>
  );
};

export default App;

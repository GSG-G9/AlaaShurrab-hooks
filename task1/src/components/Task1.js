import React, { useState } from "react";

const Task1 = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minos = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <p>{counter}</p>
      <button onClick={plus}>+</button>
      <button onClick={minos}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Task1;

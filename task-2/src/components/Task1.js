import React, { useEffect, useState } from "react";

const Task1 = () => {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  useEffect(()=>{
    document.addEventListener('mousedown',incrementCount)
    return (()=>{
      document.removeEventListener('mousedown',incrementCount)
    })
  })

  return (
    <>
      <p>{counter}</p>
    </>
  );
};

export default Task1;

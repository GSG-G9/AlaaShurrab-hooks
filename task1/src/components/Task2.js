import React, { useState } from "react";

const Task2 = () => {
  const [color, setColor] = useState("White");
  const colors = ["Red", "Green", "Blue"];

  const colorHandler = (e) => {
    setColor(e.target.innerText);
  };

  const colorsArr = colors.map((colorItem, i) => {
    return (
      <li key={i}>
        <button onClick={colorHandler}>{colorItem}</button>
      </li>
    );
  });
  return (
    <div style={{ backgroundColor: color }}>
      <ul>{colorsArr}</ul>
    </div>
  );
};

export default Task2;

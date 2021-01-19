import React, { useEffect, useState } from "react";

const Task2 = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    });
    return document.removeEventListener("mousemove", (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    });
  },[]);

  useEffect(() => {
    const width = window.innerWidth;
    if (coords.x > width / 2) {
      setColor("red");
    } else {
      setColor("blue");
    }
  }, [coords]);

  return (
    <p style={{ backgroundColor: color }}>
      you are on X:{coords.x} Y:{coords.y}{" "}
    </p>
  );
};

export default Task2;

import React, { useState } from "react";
// import fetch from 'node-fetch';

const Task4 = () => {
  const [randoText, setRandoText] = useState("");

  const addImg = (e) => {
    setRandoText(e.target.value);
  };

  return (
    <>
    <br></br>
      <input
        type="text"
        onChange={addImg}
        placeholder="enter whatever you want"
      ></input>
      <br></br>
      <img
        alt="randomImege"
        src={`https://robohash.org/${randoText}.png?set=set2`}
      ></img>
    </>
  );
};

export default Task4;

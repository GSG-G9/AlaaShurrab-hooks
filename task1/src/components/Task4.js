import React, { useState } from "react";

const Task4 = () => {
  const [info, setInfo] = useState({});

  const addInfo = (e) => {
    const inputArr = e.target.parentNode.children;
    if (inputArr[0].value.trim()) {
      if (inputArr[2].value && inputArr[2].value === inputArr[4].value) {
        setInfo({ email: inputArr[0].value, password: inputArr[2].value });
      } else {
        alert("password error");
      }
    } else {
      alert("email is requierd");
    }
  };

  const display = () => {
    if (JSON.stringify(info) !== JSON.stringify({})) {
      return (
        <div>
          <p>email:{info.email}</p>
          <br></br>
          <p>password:{info.password}</p>
          <h1 onClick={removeInfo}>X</h1>
        </div>
      );
    }
  };

  const removeInfo = () => {
    setInfo({});
  };

  return (
    <div>
      <input type="email" placeholder="enter your email" />
      <br></br>
      <input type="password" placeholder="enter your password" />
      <br></br>
      <input type="password" placeholder="re-enter your password" />
      <br></br>
      <button onClick={addInfo}> submit</button>
      <br></br>
      {display()}
    </div>
  );
};

export default Task4;

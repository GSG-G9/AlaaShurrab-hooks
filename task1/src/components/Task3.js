import React, { useState } from "react";

const Task3 = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    console.log(e.target.parentNode.children[1].value);
    setTodos([
      ...todos,
      {
        id: todos.length,
        description: e.target.parentNode.children[1].value,
      },
    ]);
  };

  const todosArr = () => {
    console.log("hi");
    return todos.map((todo, i) => {
      return (
        <li key={i}>
          <p>{todo.description}</p>
          
        </li>
      );
    });
  };


  return (
    <div>
      <h1>ToDo</h1>
      <input type="text" placeholder="what to do?" />
      <button onClick={addTodo}>Add</button>
      <ul>{todosArr()}</ul>
    </div>
  );
};

export default Task3;

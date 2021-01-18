import React, { useState } from "react";

const Task3 = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    setTodos([
      ...todos,
      {
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        description: e.target.parentNode.children[1].value,
      },
    ]);
  };

  const todosArr = () => {
    console.log("hi");
    return todos.map((todo, i) => {
      return (
        <li key={i} id={todo.id}>
          <p>{todo.description}</p>
          <p onClick={removeTodo}>X</p>
        </li>
      );
    });
  };

  const removeTodo = (e) => {
    console.log(e.target.parentNode.id);
    // const newArr = todos.filter((todo) => todo.id !== e.target.parentNode.id);
    setTodos(
      todos.filter((todo) => todo.id !== parseInt(e.target.parentNode.id))
    );
  };
  console.log(todos);
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

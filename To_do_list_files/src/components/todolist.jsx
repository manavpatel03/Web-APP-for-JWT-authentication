import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const timestamp = new Date().toISOString();
      const todo = {
        timeStamp: timestamp,
        text: newTodo,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (timeStamp) => {
    const updatedTodos = todos.filter((todo) => todo.timeStamp !== timeStamp);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (timeStamp) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.timeStamp === timeStamp) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Todo List</h1>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li
            key={todo.timeStamp}
            className={`list-group-item d-flex align-items-center ${
              todo.completed ? "completed" : ""
            }`}
          >
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => handleToggleComplete(todo.timeStamp)}
            />
            <span className="flex-grow-1">{todo.text}</span>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTodo(todo.timeStamp)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo} className="btn btn-primary mt-2">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoList;

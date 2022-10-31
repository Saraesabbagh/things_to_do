import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Here are all your Todos!</h1>
      </div>
      {todos.map((todo) => {
        return (
          <div>
            <ul>
              <li>Title: {todo.title}</li>
              <li> Description: {todo.description}</li>
              <li>Done?: { todo.done ? 'Yes' : 'No' } </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

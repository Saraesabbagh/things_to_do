import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const navigateToTodos = () => {
    navigate("/list");
  };
   const navigateToAddTodo = () => {
     navigate("/new");
   };

  return (
    <div>
      <h1>Things to do List!</h1>
      <h3>What would you like to do today?</h3>
      <button onClick={navigateToTodos}>Check my list</button>
      <button onClick={navigateToAddTodo}>Add Something to my list</button>
    </div>
  );
}

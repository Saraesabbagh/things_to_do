import React from "react";

export const AddTodo = () => {
  return (
    <div>
      <h1>Add todo to the List!</h1>
      <form>
        <input name="title" placeholder="give your todo a title" />
        <input name="description" placeholder="what is the todo" />
        <input name="done?" placeholder="is it done? Yes or no" />
      </form>
    </div>
  );
};

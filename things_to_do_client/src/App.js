import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { AddTodo } from "./components/AddTodo";
import { ListTodo } from "./components/ListTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<AddTodo />} />
          <Route path="/list" element={<ListTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

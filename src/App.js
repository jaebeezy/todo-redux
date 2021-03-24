import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import Input from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <TodoList />
        <Input />
      </header>
    </div>
  );
};

export default App;

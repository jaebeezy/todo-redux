import React from "react";

import { useSelector } from "react-redux";
import { selectTodo } from "../features/todo/todoSlice";

const TodoList = () => {
  const todo = useSelector(selectTodo);
  console.log(todo);

  return (
    <div>
      {todo.map((list) => (
        <p key={list.id}>{list.item}</p>
      ))}
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Input = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const save = () => {
    dispatch(
      addTodo({
        item: text,
        done: false,
        id: Date.now(),
      })
    );

    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={save}>Add</button>
    </div>
  );
};

export default Input;

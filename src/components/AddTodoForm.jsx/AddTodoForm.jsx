import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../provider/DarkModeProvider";
import { TodoContext } from "../../provider/TodoListProvider";
import styles from "./AddTodoForm.module.css";

export default function AddTodoForm() {
  const { action } = useContext(TodoContext);
  const [text, setText] = useState("");
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        handleSubmit(e);
        text.trim().length !== 0 && action.addTodo(text);
      }}
    >
      <input
        className={styles.todo_input}
        value={text}
        type="text"
        placeholder="Add Todo"
        onChange={handleChange}
      />
      <button className={styles.todo_btn} type="submit">
        Add
      </button>
    </form>
  );
}

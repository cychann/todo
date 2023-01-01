import React, { useContext } from "react";
import { DarkModeContext } from "../../provider/DarkModeProvider";
import { TodoContext } from "../../provider/TodoListProvider";
import styles from "./TodoItem.module.css";

import { FaTrashAlt } from "react-icons/fa";

export default function TodoItem({ todo }) {
  const { action } = useContext(TodoContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li key={todo.id} className={styles.todo}>
      <div className={styles.todo_left}>
        <input
          className={styles.check_box}
          type="checkbox"
          checked={todo.done}
          onChange={() => action.checkTodo(todo.id)}
        />
        {todo.done ? (
          <del>
            <label
              htmlFor="checkbox"
              className={`${styles.todo_done} ${styles.text}`}
            >
              {todo.text}
            </label>
          </del>
        ) : (
          <label htmlFor="checkbox" className={styles.text}>
            {todo.text}
          </label>
        )}
      </div>
      <div className={styles.icon}>
        <button
          onClick={() => action.deleteTodo(todo.id)}
          className={styles.button}
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
}

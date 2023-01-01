import React, { useContext } from "react";
import { TodoContext } from "../../provider/TodoListProvider";
import styles from "./FilterTodo.module.css";

export default function FilterTodo() {
  const { action } = useContext(TodoContext);

  return (
    <ul className={styles.filter_box}>
      <li
        className={styles.filter_text}
        id="all"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        All
      </li>
      <li
        className={styles.filter_text}
        id="active"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        Active
      </li>
      <li
        className={styles.filter_text}
        id="completed"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        Completed
      </li>
    </ul>
  );
}

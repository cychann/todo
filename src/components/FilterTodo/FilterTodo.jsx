import React, { useContext } from "react";
import { TodoContext } from "../../provider/TodoListProvider";
import styles from "./FilterTodo.module.css";

export default function FilterTodo() {
  const { action, filterType } = useContext(TodoContext);

  return (
    <ul className={styles.filter_box}>
      <li
        className={`${styles.filter_text} ${
          filterType === "all" && styles.selected
        }`}
        id="all"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        All
      </li>
      <li
        className={`${styles.filter_text} ${
          filterType === "active" && styles.selected
        }`}
        id="active"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        Active
      </li>
      <li
        className={`${styles.filter_text} ${
          filterType === "completed" && styles.selected
        }`}
        id="completed"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        Completed
      </li>
    </ul>
  );
}

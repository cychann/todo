import React, { useContext } from "react";
import { TodoContext } from "../../provider/TodoListProvider";
import styles from "./FilterTodo.module.css";

export default function FilterTodo() {
  const { action } = useContext(TodoContext);

  return (
    <div className={styles.filter_box}>
      <div
        className={styles.filter_text}
        id="all"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        All
      </div>
      <div
        className={styles.filter_text}
        id="active"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        Active
      </div>
      <div
        className={styles.filter_text}
        id="completed"
        onClick={(e) => action.filterTodo(e.target.id)}
      >
        Completed
      </div>
    </div>
  );
}

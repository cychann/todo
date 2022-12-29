import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../provider/TodoListProvider";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const { todoList, localId, filterType } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("localId", JSON.stringify(localId));
  }, [todoList, localId]);

  return (
    <div className={styles.todo_list}>
      {filterType === "all" && todoList.map((todo) => <TodoItem todo={todo} />)}

      {filterType === "active" &&
        todoList
          .filter((todo) => !todo.done)
          .map((todo) => <TodoItem todo={todo} />)}

      {filterType === "completed" &&
        todoList
          .filter((todo) => todo.done)
          .map((todo) => <TodoItem todo={todo} />)}
    </div>
  );
}

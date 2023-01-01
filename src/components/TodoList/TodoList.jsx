import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../provider/TodoListProvider";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const { todoList, localId, filterType } = useContext(TodoContext);

  const getFilterdTodoList = (todos, filter) => {
    if (filter === "all") return todos;
    else if (filter === "active") return todos.filter((todo) => !todo.done);
    else return todos.filter((todo) => todo.done);
  };

  const filterdTodoList = getFilterdTodoList(todoList, filterType);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("localId", JSON.stringify(localId));
  }, [todoList, localId]);

  return (
    <section className={styles.container}>
      <ul className={styles.todo_list}>
        {filterdTodoList.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </section>
  );
}

import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoListProvider({ children }) {
  const readTodosFromLocalStorage = () => {
    return localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
  };

  const [todoList, setTodoList] = useState(() => readTodosFromLocalStorage());
  const [localId, setLocalId] = useState(
    localStorage.getItem("localId") ? localStorage.getItem("localId") : 1
  );

  const [filterType, setFilterType] = useState("all");

  const action = {
    setTodo(localTodoList) {
      setTodoList([...localTodoList]);
    },

    checkTodo(targetId) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === targetId ? { ...todo, done: !todo.done } : { ...todo }
        )
      );
    },

    addTodo(text) {
      const newTodo = {
        id: localId,
        text,
        done: false,
      };

      setTodoList([...todoList, newTodo]);
      setLocalId((prev) => prev + 1);
    },

    deleteTodo(tagetId) {
      setTodoList(todoList.filter((todo) => todo.id !== tagetId));
    },

    filterTodo(filter) {
      setFilterType(filter);
    },
  };

  return (
    <TodoContext.Provider value={{ todoList, localId, filterType, action }}>
      {children}
    </TodoContext.Provider>
  );
}

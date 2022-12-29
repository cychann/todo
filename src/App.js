import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";
import AddTodoForm from "./components/AddTodoForm.jsx/AddTodoForm";
import { DarkModeContext } from "./provider/DarkModeProvider";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <Header />
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;

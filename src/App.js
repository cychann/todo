import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";
import AddTodoForm from "./components/AddTodoForm.jsx/AddTodoForm";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;

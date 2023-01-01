import React from "react";
import FilterTodo from "../FilterTodo/FilterTodo";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <ToggleDarkMode />
      <FilterTodo />
    </header>
  );
}

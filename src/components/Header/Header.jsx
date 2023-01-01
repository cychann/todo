import React, { useContext } from "react";
import { DarkModeContext } from "../../provider/DarkModeProvider";
import FilterTodo from "../FilterTodo/FilterTodo";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import styles from "./Header.module.css";

export default function Header() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.header}>
      <ToggleDarkMode />
      <FilterTodo />
    </header>
  );
}

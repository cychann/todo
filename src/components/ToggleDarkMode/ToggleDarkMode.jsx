import React, { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { DarkModeContext } from "../../provider/DarkModeProvider";
import styles from "./ToggleDarkMode.module.css";

export default function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.toggle} onClick={toggleDarkMode}>
      {darkMode ? <HiSun size="25" color="white" /> : <HiMoon size="25" />}
    </div>
  );
}

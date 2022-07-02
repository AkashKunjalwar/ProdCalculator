import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Know Your Prod</h1>
      <h5>v1.0.0</h5>
    </header>
  );
};

export default Header;

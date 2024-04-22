import React from "react";
import styles from "../styles/layout/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <h2 className={styles.logo}>Pokédex</h2>
    </div>
  );
}

export default Navbar;

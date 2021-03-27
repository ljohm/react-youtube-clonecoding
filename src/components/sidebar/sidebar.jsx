import React from "react";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <nav className={styles.sidebar}>
        <button className={styles.sidebar_button}>
          <i className="fas fa-bars"></i>
        </button>
        <button className={styles.sidebar_button}>
          <i className="fas fa-home"></i>
          <br></br>
          <span className={styles.sidebar_buttonTitle}>홈</span>
        </button>
        <button className={styles.sidebar_button}>
          <i className="fas fa-compass"></i>
          <br></br>
          <span className={styles.sidebar_buttonTitle}>탐색</span>
        </button>
        <button className={styles.sidebar_button}>
          <i className="fas fa-play"></i>
          <br></br>
          <span className={styles.sidebar_buttonTitle}>구독</span>
        </button>
        <button className={styles.sidebar_button}>
          <i className="fas fa-archive"></i>
          <br></br>
          <span className={styles.sidebar_buttonTitle}>보관함</span>
        </button>
      </nav>
    </>
  );
};

export default Sidebar;

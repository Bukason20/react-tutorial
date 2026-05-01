import React from "react";
import "../styles/home.css";
import styles from "../module-styles/home.module.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the React</h1>

      <div className="card"></div>
      <div className={styles.card}></div>
    </div>
  );
};

export default Home;

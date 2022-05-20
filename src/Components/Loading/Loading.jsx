import React from "react";
import styles from "../Loading/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>Loading...</div>
    </div>
  );
}

export default Loading;

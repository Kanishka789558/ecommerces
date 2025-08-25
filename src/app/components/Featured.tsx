"use client";
import Image from "next/image";
import styles from "./Featured.module.css";

export default function Featured() {
  return (
    <div className={styles.productSection}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        {/* Left side */}
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <div className={styles.tagBox}></div>
            <span className={styles.tag}>Featured</span>
          </div>
          <h2 className={styles.heading}>New Arrival</h2>
        </div>
      </div>
    </div>
  );
}

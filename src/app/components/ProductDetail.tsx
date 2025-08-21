/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import styles from "./productdetail.module.css";

export default function ProductDetail() {
  return (
    <div className={styles.container}>
      {/* Left Side - Small Images */}
      <div className={styles.leftColumn}>
        <div className={styles.smallBox}></div>
        <div className={styles.smallBox2}></div>
        <div className={styles.smallBox}></div>
        <div className={styles.smallBox}></div>
      </div>

      {/* Center - Main Image */}
      <div className={styles.mainImage}></div>

      {/* Right Side - Product Info */}
      <div className={styles.rightColumn}>
        <h2 className={styles.productTitle}>Havic HV G-92 Gamepad</h2>

        {/* Rating */}
        <div className={styles.ratingRow}>
          <div className={styles.stars}>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.starGray}></div>
          </div>
          <span className={styles.reviews}>(150 Reviews)</span>
          <div className={styles.divider}></div>
          <span className={styles.stock}>In Stock</span>
        </div>

        {/* Price */}
        <div className={styles.price}>$192.00</div>

        {/* Description */}
        <p className={styles.description}>
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>

        <div className={styles.underline}></div>

        {/* Colors */}
        <div className={styles.colorRow}>
          <span>Colours:</span>
          <div className={styles.colorCircle}></div>
          <div className={styles.colorCircleRed}></div>
        </div>

        {/* Sizes */}
        <div className={styles.sizeRow}>
          <span className={styles.sizeLabel}>Size:</span>
          <div className={styles.sizeOptions}>
            <div className={styles.sizeBox}>XS</div>
            <div className={styles.sizeBox}>S</div>
            <div className={styles.sizeBoxActive}>M</div>
            <div className={styles.sizeBox}>L</div>
            <div className={styles.sizeBox}>XL</div>
          </div>
        </div>

        {/* Quantity + Buttons */}
        <div className={styles.actionRow}>
          <div className={styles.qtyBox}>
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>

          <button className={styles.buyNow}>Buy Now</button>

          <div className={styles.heart}></div>
        </div>
      </div>
    </div>
  );
}

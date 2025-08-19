"use client";

import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
  return (
    <section className={styles.cartContainer}>
      {/* Header */}
      <div className={styles.cartHeader}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Cart Item 1 */}
      <div className={styles.cartItem}>
        <button className={styles.removeBtn}>✕</button>
        <Image
          src="/monitor.png"
          alt="LCD Monitor"
          width={54}
          height={54}
          className={styles.productImg}
        />
        <span className={styles.productName}>LCD Monitor</span>
        <span className={styles.productPrice}>$650</span>
        <div className={styles.quantityBox}>
          <input type="number" defaultValue={1} min={1} />
        </div>
        <span className={styles.productSubtotal}>$650</span>
      </div>

      {/* Cart Item 2 */}
      <div className={styles.cartItem}>
        <button className={styles.removeBtn}>✕</button>
        <Image
          src="/gamepad.png"
          alt="HI Gamepad"
          width={54}
          height={54}
          className={styles.productImg}
        />
        <span className={styles.productName}>HI Gamepad</span>
        <span className={styles.productPrice}>$550</span>
        <div className={styles.quantityBox}>
          <input type="number" defaultValue={2} min={1} />
        </div>
        <span className={styles.productSubtotal}>$1100</span>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionBtns}>
        <button className={styles.secondaryBtn}>Return To Shop</button>
        <button className={styles.secondaryBtn}>Update Cart</button>
      </div>

      {/* Coupon + Cart Total */}
      <div className={styles.bottomSection}>
        {/* Coupon */}
        <div className={styles.couponWrapper}>
          <input type="text" placeholder="Coupon Code" />
          <button className={styles.applyBtn}>Apply Coupon</button>
        </div>

        {/* Cart Total */}
        <div className={styles.cartTotal}>
          <h3>Cart Total</h3>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className={styles.totalRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <button className={styles.checkoutBtn}>Proceed to checkout</button>
        </div>
      </div>
    </section>
  );
}

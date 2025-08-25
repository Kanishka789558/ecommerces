"use client";

import Image from "next/image";
import styles from "./checkout.module.css";

export default function Checkout() {
  return (
    <section className={styles.checkoutSection}>
      {/* Billing Details */}
      <div className={styles.billing}>
        <h2>Billing Details</h2>
        <form className={styles.form}>
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Street Address*" required />
          <input type="text" placeholder="Apartment, floor, etc. (optional)" />
          <input type="text" placeholder="Town/City*" required />
          <input type="tel" placeholder="Phone Number*" required />
          <input type="email" placeholder="Email Address*" required />

          <label className={styles.checkbox}>
            <input type="checkbox" /> Save this information for faster
            check-out next time
          </label>
        </form>
      </div>

      {/* Order Summary */}
      <div className={styles.orderSummary}>
        {/* Products */}
        <div className={styles.productRow}>
          <Image
            src="/gamepad.png"
            alt="Gamepad"
            width={54}
            height={54}
            className={styles.productImg}
          />
          <div className={styles.productInfo}>
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>
        </div>

        <div className={styles.productRow}>
          <Image
            src="/monitor.png"
            alt="Monitor"
            width={54}
            height={54}
            className={styles.productImg}
          />
          <div className={styles.productInfo}>
            <span>H1 Gamepad</span>
            <span>$1100</span>
          </div>
        </div>

        {/* Totals */}
        <div className={styles.totals}>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <span>Total:</span>
            <span>$1750</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className={styles.payment}>
          <div className={styles.radioRow}>
            <input type="radio" name="payment" />
            <label>Bank</label>
          </div>
          <div className={styles.paymentLogos}>
            <Image src="/bkash.png" alt="Bkash" width={42} height={28} />
            <Image src="/visa.png" alt="Visa" width={42} height={28} />
            <Image src="/mastercard.png" alt="Mastercard" width={42} height={28} />
            <Image src="/nagad.png" alt="Nagad" width={42} height={28} />
          </div>
          <div className={styles.radioRow}>
            <input type="radio" name="payment" defaultChecked />
            <label>Cash on delivery</label>
          </div>
        </div>

        {/* Coupon */}
        <div className={styles.coupon}>
          <input type="text" placeholder="Coupon Code" />
          <button className={styles.couponBtn}>Apply Coupon</button>
        </div>

        {/* Place Order */}
        <button className={styles.placeOrderBtn}>Place Order</button>
      </div>
    </section>
  );
}

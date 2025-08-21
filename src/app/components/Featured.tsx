"use client";
import Image from "next/image";
import styles from "./Featured.module.css";
import ProductShowcase from "./ProductShowcase";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";


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
          <div>
            <ProductShowcase/>   
          </div>
          
            <section>
              <div className={styles.services}>
                {/* Box 1 */}
                <div className={styles.serviceBox}>
                  <div className={styles.iconCircle}>
                    <FaTruck size={32} color="#fff" />
                  </div>
                  <h3 className={styles.title}>FREE AND FAST DELIVERY</h3>
                  <p className={styles.text}>Free delivery for all orders over $140</p>
                </div>
          
                {/* Box 2 */}
                <div className={styles.serviceBox}>
                  <div className={styles.iconCircle}>
                    <FaHeadset size={32} color="#fff" />
                  </div>
                  <h3 className={styles.title}>24/7 CUSTOMER SERVICE</h3>
                  <p className={styles.text}>Friendly 24/7 customer support</p>
                </div>
          
                {/* Box 3 */}
                <div className={styles.serviceBox}>
                  <div className={styles.iconCircle}>
                    <FaShieldAlt size={32} color="#fff" />
                  </div>
                  <h3 className={styles.title}>MONEY BACK GUARANTEE</h3>
                  <p className={styles.text}>We return money within 30 days</p>
                </div>
              </div>
            </section>
          
        </div>
      </div>
      

    </div>
  );
}

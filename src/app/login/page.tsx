/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
  return (
    <main className={styles.loginPage}>
      {/* Left image */}
      <div className={styles.imageSection}>
        <img
          src="/signup-image.jpg"
          alt="Shopping cart and phone"
          className={styles.loginImage}
        />
      </div>

      {/* Right form */}
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>

          <form className={styles.form}>
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />

            <div className={styles.formActions}>
              <button type="submit" className={styles.loginBtn}>
                Log In
              </button>
              <Link href="/forgot-password" className={styles.forgotLink}>
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

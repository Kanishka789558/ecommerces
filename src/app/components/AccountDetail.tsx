/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { FaUser, FaBoxOpen, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";
import styles from "./AccountDetail.module.css";
import Link from "next/link";

export default function AccountDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.menu}>
        <li>
          <FaUser className={styles.icon} />
          <Link href="/manageaccount">
            <span>Manage My Account</span>
          </Link>  
        </li>
        <li>
          <FaBoxOpen className={styles.icon} />
          <span>My Order</span>
        </li>
        <li>
          <FaTimesCircle className={styles.icon} />
          <span>My Cancellations</span>
        </li>
        <li>
          <FaStar className={styles.icon} />
          <span>My Reviews</span>
        </li>
        <li className={styles.logout}>
          <FaSignOutAlt className={styles.icon} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

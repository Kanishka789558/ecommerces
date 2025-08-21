// "use client";

// import styles from "./ManageAccount.module.css";

// export default function ManageAccount() {
//   return (
//     <section className={styles.container}>
//       <h2 className={styles.title}>Manage My Account</h2>

//       {/* Personal Info */}
//       <div className={styles.section}>
//         <h3 className={styles.subtitle}>Personal Information</h3>
//         <div className={styles.formRow}>
//           <div className={styles.inputGroup}>
//             <label>First Name</label>
//             <input type="text" placeholder="John" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Last Name</label>
//             <input type="text" placeholder="Doe" />
//           </div>
//         </div>

//         <div className={styles.formRow}>
//           <div className={styles.inputGroup}>
//             <label>Email</label>
//             <input type="email" placeholder="john@example.com" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Address</label>
//             <input type="text" placeholder="123 Main Street" />
//           </div>
//         </div>
//       </div>

//       {/* Password Change */}
//       <div className={styles.section}>
//         <h3 className={styles.subtitle}>Password Changes</h3>
//         <div className={styles.inputGroup}>
//           <label>Current Password</label>
//           <input type="password" placeholder="********" />
//         </div>
//         <div className={styles.inputGroup}>
//           <label>New Password</label>
//           <input type="password" placeholder="********" />
//         </div>
//         <div className={styles.inputGroup}>
//           <label>Confirm New Password</label>
//           <input type="password" placeholder="********" />
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className={styles.actions}>
//         <button className={styles.cancelBtn}>Cancel</button>
//         <button className={styles.saveBtn}>Save Changes</button>
//       </div>
//     </section>
//   );
// }









"use client";

import styles from "./manageaccount.module.css";

export default function ManageAccount() {
  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb (Top Left) */}
      <div className={styles.breadcrumb}>
        <span>Home</span>
        <span className={styles.separator}>/</span>
        <span>My Account</span>
      </div>

      {/* Welcome Message (Top Right) */}
      <div className={styles.welcome}>
        Welcome! <span className={styles.username}>Md Rimel</span>
      </div>

      <div className={styles.layout}>
        {/* Sidebar (Left Content) */}
        <aside className={styles.sidebar}>
          <h3>Manage My Account</h3>
          <ul>
            <li className={styles.active}>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>

          <h3>My Orders</h3>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>

          <h3>My Wishlist</h3>
        </aside>

        {/* Main Section (Already Done) */}
        <section className={styles.container}>
          <h2 className={styles.title}>Manage My Account</h2>

          {/* Personal Info */}
          <div className={styles.section}>
            <h3 className={styles.subtitle}>Personal Information</h3>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Address</label>
                <input type="text" placeholder="123 Main Street" />
              </div>
            </div>
          </div>

          {/* Password Change */}
          <div className={styles.section}>
            <h3 className={styles.subtitle}>Password Changes</h3>
            <div className={styles.inputGroup}>
              <label>Current Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className={styles.inputGroup}>
              <label>New Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm New Password</label>
              <input type="password" placeholder="********" />
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.actions}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.saveBtn}>Save Changes</button>
          </div>
        </section>
      </div>
    </div>
  );
}

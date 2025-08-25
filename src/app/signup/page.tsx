/* eslint-disable @next/next/no-img-element */
"use client";

// import { useState } from "react";
// import styles from "./signup.module.css";
// import Login from "./Login";


// export default function SignUp() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
    
//     <main className={styles.signupPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.signupImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Create an account</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form}>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email or Phone Number" />
//             <input type="password" placeholder="Password" />

//             <button type="submit" className={styles.createBtn}>
//               Create Account
//             </button>

//             <button type="button" className={styles.googleBtn}>
//               <img src="/google-icon.svg" alt="Google" />
//               Sign up with Google
//             </button>
//           </form>

//           <p className={styles.loginLink}>
//             Already have an account?{" "}
//             <button
//               type="button"
//               className={styles.loginAnchor}
//               onClick={() => setShowLogin(true)}
//             >
//               Log In
//             </button>
//           </p>

//           {/* Conditionally render Login */}
//           {showLogin && <Login />}
//         </div>
//       </div>
//     </main>
//     </>
//   );
// }

"use client";

// import { useState } from "react";
// import styles from "./signup.module.css";
// import login from "@/app/login";
// import 


// export default function SignUp() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
    
//     <main className={styles.signupPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.signupImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Create an account</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form}>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email or Phone Number" />
//             <input type="password" placeholder="Password" />

//             <button type="submit" className={styles.createBtn}>
//               Create Account
//             </button>

//             <button type="button" className={styles.googleBtn}>
//               <img src="/google-icon.svg" alt="Google" />
//               Sign up with Google
//             </button>
//           </form>

//           <p className={styles.loginLink}>
//             Already have an account?{" "}
//             <button
//               type="button"
//               className={styles.loginAnchor}
//               onClick={() => setShowLogin(true)}
//             >
//               Log In
//             </button>
//           </p>

//           {/* Conditionally render Login */}
//           {showLogin && <login />}
//         </div>
//       </div>
//     </main>
//     </>
//   );
// }












"use client";


import Link from "next/link";
import styles from "./signup.module.css";

export default function SignUp() {
  return (
    <main className={styles.signupPage}>
      {/* Left image */}
      <div className={styles.imageSection}>
        <img
          src="/signup-image.jpg"
          alt="Shopping cart and phone"
          className={styles.signupImage}
        />
      </div>

      {/* Right form */}
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>

          <form className={styles.form}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />

            <button type="submit" className={styles.createBtn}>
              Create Account
            </button>

            <button type="button" className={styles.googleBtn}>
              <img src="/google-icon.svg" alt="Google" />
              Sign up with Google
            </button>
          </form>

          <p className={styles.loginLink}>
            Already have an account?{" "}
            <Link href="/login" className={styles.loginAnchor}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}




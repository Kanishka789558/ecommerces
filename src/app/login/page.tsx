/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// "use client";

// import Link from "next/link";
// import styles from "./login.module.css";

// export default function Login() {
//   return (
//     <main className={styles.loginPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.loginImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Log in to Exclusive</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form}>
//             <input type="text" placeholder="Email or Phone Number" />
//             <input type="password" placeholder="Password" />

//             <div className={styles.formActions}>
//               <button type="submit" className={styles.loginBtn}>
//                 Log In
//               </button>
//               <Link href="/forgot-password" className={styles.forgotLink}>
//                 Forgot Password?
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";
// import { useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // Email/Password Login
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       setError(error.message);
//     } else {
//       router.push("/dashboard"); // redirect after login
//     }
//   };

//   // Google OAuth Login
//   const handleGoogleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         redirectTo: "http://localhost:3000/auth/callback", // change in production
//       },
//     });
//     if (error) setError(error.message);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form
//         onSubmit={handleLogin}
//         className="p-6 bg-white shadow-lg rounded-md space-y-4 w-80"
//       >
//         <h2 className="text-xl font-bold">Login</h2>

//         {error && <p className="text-red-500">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           className="border w-full p-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="border w-full p-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           className="bg-red-500 text-white w-full p-2 rounded hover:bg-red-600"
//         >
//           Login with Google
//         </button>
//       </form>
//     </div>
//   );
// }







// "use client";
// import { useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import { useRouter } from "next/navigation";
// import styles from "./login.module.css"  // <-- apna CSS file import

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // Email/Password Login
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       setError(error.message);
//     } else {
//       router.push("/");
//     }
//   };

//   // Google OAuth Login
//   const handleGoogleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         redirectTo: "http://localhost:3000/auth/callback",
//       },
//     });
//     if (error) setError(error.message);
//   };

//   return (
//     <div className="loginPage">
//       {/* Left Image Section */}
//       <div className="imageSection">
//         <img
//           src="/login-bg.jpg"
//           alt="Login Background"
//           className="loginImage"
//         />
//       </div>

//       {/* Right Form Section */}
//       <div className="formSection">
//         <div className="formContainer">
//           <form onSubmit={handleLogin} className="form">
//             <h2>Login</h2>

//             {error && <p style={{ color: "red" }}>{error}</p>}

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className="formActions">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="loginBtn"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//               <a href="#" className="forgotLink">
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="loginBtn"
//               style={{ backgroundColor: "#4285F4" }}
//             >
//               Login with Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import { useRouter } from "next/navigation";
import styles from"./login.module.css"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Email/Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  // Google OAuth Login
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
    if (error) setError(error.message);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.imageSection}>
        <img src="/login-bg.jpg" alt="Login Background" className={styles.loginImage}/>
      </div>

      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <form onSubmit={handleLogin} className={styles.form}>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="formActions">
              <button type="submit" disabled={loading} className={styles.loginBtn}>
                {loading ? "Logging in..." : "Login"}
              </button>
              <a href="#" className="forgotLink">Forgot password?</a>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="loginBtn"
              style={{ backgroundColor: "#4285F4" }}
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

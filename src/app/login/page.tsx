// "use client";

// import { supabase } from "@/app/libr/supabaseClient";
// import { useRouter } from "next/navigation";

// export default function LogoutPage() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login"); // redirect after logout
//   };

//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Logout</h1>
//       <button
//         onClick={handleLogout}
//         style={{
//           padding: "0.75rem 1.5rem",
//           backgroundColor: "#000",
//           color: "#fff",
//           borderRadius: "0.5rem",
//           cursor: "pointer",
//           marginTop: "1rem",
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// components/LogoutButton.tsx
"use client";

import { supabase } from "@/app/libr/supabaseClient";

export default function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    // After logout, you can use window.location to redirect instead of useRouter
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "0.75rem 1.5rem",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "0.5rem",
        cursor: "pointer",
        marginTop: "1rem",
      }}
    >
      Logout
    </button>
  );
}

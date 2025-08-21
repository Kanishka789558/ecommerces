/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);

//   // Fetch orders from Supabase
//   useEffect(() => {
//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orders")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) {
//         console.error(error);
//       } else {
//         setOrders(data);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Add to cart
//   const addToCart = async (productId: number) => {
//     const { data, error } = await supabase.from("cart").insert([
//       {
//         product_id: productId,
//         quantity: 1,
//         user_id: "123", // Replace with logged in user id
//       },
//     ]);

//     if (error) {
//       console.error(error);
//     } else {
//       alert("Item added to cart!");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul>
//           {orders.map((order) => (
//             <li key={order.id} style={{ margin: "10px 0" }}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button onClick={() => addToCart(order.product_id)}>
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./orders.module.css";

export default function MyOrder() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setOrders(data);
    };
    fetchOrders();
  }, []);

  const addToCart = async (productId: number) => {
    const { error } = await supabase.from("cart").insert([
      { product_id: productId, quantity: 1, user_id: "123" }, // replace with real user_id
    ]);

    if (error) console.error(error);
    else alert("Item added to cart!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul className={styles.orderList}>
          {orders.map((order) => (
            <li key={order.id} className={styles.orderItem}>
              <strong>Order ID:</strong> {order.id} <br />
              <strong>Status:</strong> {order.status} <br />
              <button
                className={styles.button}
                onClick={() => addToCart(order.product_id)}
              >
                Add Again to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

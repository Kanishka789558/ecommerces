// "use client";

// import styles from "./Wishlist.module.css";
// import Link from "next/link";
// import Image from "next/image";

// export default function Wishlist() {
//   const wishlistItems = [
//     {
//       id: 1,
//       title: "Gucci duffle bag",
//       price: 960,
//       oldPrice: 1160,
//       discount: "-35%",
//       image: "/bag.png",
//     },
//     {
//       id: 2,
//       title: "RGB liquid CPU Cooler",
//       price: 1960,
//       oldPrice: 2200,
//       discount: "",
//       image: "/cooler.png",
//     },
//     {
//       id: 3,
//       title: "GP11 Shooter USB Gamepad",
//       price: 550,
//       oldPrice: "",
//       discount: "",
//       image: "/gamepad.png",
//     },
//     {
//       id: 4,
//       title: "Quilted Satin Jacket",
//       price: 750,
//       oldPrice: "",
//       discount: "",
//       image: "/jacket.png",
//     },
//   ];

//   const justForYou = [
//     {
//       id: 5,
//       title: "ASUS FHD Gaming Laptop",
//       price: 960,
//       oldPrice: 1160,
//       discount: "-25%",
//       image: "/laptop.png",
//       rating:4,
//     },
//     {
//       id: 6,
//       title: "IPS LCD Gaming Monitor",
//       price: 1160,
//       oldPrice: 1300,
//       discount: "",
//       image: "/monitor.png",
//       rating:4,
//     },
//     {
//       id: 7,
//       title: "HAVIT HV-G92 Gamepad",
//       price: 560,
//       oldPrice: "",
//       discount: "NEW",
//       image: "/red-gamepad.png",
//       rating:4,
//     },
//     {
//       id: 8,
//       title: "AK-900 Wired Keyboard",
//       price: 200,
//       oldPrice: "",
//       discount: "",
//       image: "/keyboard.png",
//       rating:4,
//     },
//   ];

//   return (
//     <main className={styles.wishlistPage}>
//       {/* Wishlist Header */}
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn}>Move All To Bag</button>
//       </div>

//       {/* Wishlist Items */}
//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             {item.discount && (
//               <span className={styles.discount}>{item.discount}</span>
//             )}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.title}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${item.price}</span>
//               {item.oldPrice && (
//                 <span className={styles.oldPrice}>${item.oldPrice}</span>
//               )}
//             </div>
//             <button className={styles.addToCart}>Add To Cart</button>
//           </div>
//         ))}
//       </div>

//       {/* Just For You Section */}
//       <div className={styles.justForYouHeader}>
//         <h2>Just For You</h2>
//         <Link href="#" className={styles.seeAll}>
//           See All
//         </Link>
//       </div>

//       <div className={styles.cardGrid}>
//         {justForYou.map((item) => (
//           <div key={item.id} className={styles.card}>
//             {item.discount && (
//               <span className={styles.discount}>{item.discount}</span>
//             )}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.title}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${item.price}</span>
//               {item.oldPrice && (
//                 <span className={styles.oldPrice}>${item.oldPrice}</span>
//               )}
//             </div>
//             <button className={styles.addToCart}>Add To Cart</button>
//             {/* ✅ Rating */}
//             <div className={styles.rating}>
//               {"★".repeat(wishlistItems.rating)}
//               {"☆".repeat(5 - wishlistItems.rating)}
//               <span className={styles.reviews}>({wishlistItems.reviews})</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }




"use client";

import styles from "./Wishlist.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      title: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      image: "/bag.png",
    },
    {
      id: 2,
      title: "RGB liquid CPU Cooler",
      price: 1960,
      oldPrice: 2200,
      discount: "",
      image: "/cooler.png",
    },
    {
      id: 3,
      title: "GP11 Shooter USB Gamepad",
      price: 550,
      oldPrice: "",
      discount: "",
      image: "/gamepad.png",
    },
    {
      id: 4,
      title: "Quilted Satin Jacket",
      price: 750,
      oldPrice: "",
      discount: "",
      image: "/jacket.png",
    },
  ];

  const justForYou = [
    {
      id: 5,
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      oldPrice: 1160,
      discount: "-25%",
      image: "/laptop.png",
      rating: 4,
    },
    {
      id: 6,
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      oldPrice: 1300,
      discount: "",
      image: "/monitor.png",
      rating: 4,
    },
    {
      id: 7,
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      oldPrice: "",
      discount: "NEW",
      image: "/red-gamepad.png",
      rating: 4,
    },
    {
      id: 8,
      title: "AK-900 Wired Keyboard",
      price: 200,
      oldPrice: "",
      discount: "",
      image: "/keyboard.png",
      rating: 4,
    },
  ];

  return (
    <main className={styles.wishlistPage}>
      {/* Wishlist Header */}
      <div className={styles.headerRow}>
        <h2>Wishlist ({wishlistItems.length})</h2>
        <button className={styles.moveAllBtn}>Move All To Bag</button>
      </div>

      {/* Wishlist Items */}
      <div className={styles.cardGrid}>
        {wishlistItems.map((item) => (
          <div key={item.id} className={styles.card}>
            {item.discount && (
              <span className={styles.discount}>{item.discount}</span>
            )}
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className={styles.productImg}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>${item.price}</span>
              {item.oldPrice && (
                <span className={styles.oldPrice}>${item.oldPrice}</span>
              )}
            </div>
            <button className={styles.addToCart}>Add To Cart</button>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className={styles.justForYouHeader}>
        <h2>Just For You</h2>
        <Link href="#" className={styles.seeAll}>
          See All
        </Link>
      </div>

      <div className={styles.cardGrid}>
        {justForYou.map((item) => (
          <div key={item.id} className={styles.card}>
            {item.discount && (
              <span className={styles.discount}>{item.discount}</span>
            )}
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className={styles.productImg}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>${item.price}</span>
              {item.oldPrice && (
                <span className={styles.oldPrice}>${item.oldPrice}</span>
              )}
            </div>
            <button className={styles.addToCart}>Add To Cart</button>

            {/* ✅ Fixed Rating */}
            <div className={styles.rating}>
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

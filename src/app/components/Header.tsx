/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/role-has-required-aria-props */



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import styles from "./Header.module.css";
// import AccountDetail from "./AccountDetail"; 

// export default function Header() {
//   const [langOpen, setLangOpen] = useState(false);
//     const [showAccount, setShowAccount] = useState(false);

//   return (
//     <>
    
//       <header className={styles.header}>
//         {/* Top promo bar */}
//         <div className={styles.promoBar}>
//           <div className={styles.container}>
//             <p className={styles.promoText}>
//               Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
//               <Link href="#" className={styles.shopNow}>
//                 ShopNow
//               </Link>
//             </p>

//             <div
//               className={styles.lang}
//               onMouseEnter={() => setLangOpen(true)}
//               onMouseLeave={() => setLangOpen(false)}
//             >
//               <button
//                 className={styles.langBtn}
//                 aria-haspopup="listbox"
//                 aria-expanded={langOpen}
//                 onClick={() => setLangOpen((v) => !v)}
//               >
//                 English
//                 <ChevronDown />
//               </button>
//               {langOpen && (
//                 <ul className={styles.langList} role="listbox">
//                   <li role="option">English</li>
//                   <li role="option">हिन्दी</li>
//                   <li role="option">Français</li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main nav */}
//         <div className={styles.mainNavWrapper}>
//           <nav className={`${styles.container} ${styles.mainNav}`}>
//             <Link href="/" className={styles.brand}>
//               Exclusive
//             </Link>

//             <ul className={styles.links}>
//               <li>
//                 <Link href="/" className={`${styles.link} ${styles.active}`}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className={styles.link}>
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className={styles.link}>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 {/* ✅ Direct route to /signup */}
//                 <Link href="/signup" className={styles.link}>
//                   SignUp
//                 </Link>
//               </li>
//             </ul>

//             <div className={styles.actions}>
//               <div className={styles.search}>
//                 <input
//                   aria-label="Search"
//                   placeholder="What are you looking for?"
//                 />
//                 <button aria-label="Search">
//                   <SearchIcon />
//                 </button>
//               </div>

//               <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
//                 <HeartIcon />
//               </Link>

//               <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
//                 <CartIcon />
//               </Link>

//               {/* Account Icon */}
//               <button
//                 onClick={() => setShowAccount((prev) => !prev)}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   position: "absolute",
//                   top: 0,
//                   right: "20px",
            
//                 }}
//               >
//               <FaUserCircle size={32} />
//               </button>

//               {/* ✅ Dropdown dikh raha hai */}
//                {showAccount && <AccountDetail onClose={() => setShowAccount(false)} />}
//               </div>

              
//             </div>
//           </nav>
//         </div>
//       </header>
      
//     {/* <hr style={{ width: "1440px", border: "1px solid #ccc", margin: 0 }} /> */}
    
//      {/* <hr
//       style={{
//       width: "100%",              // full width
//       maxWidth: "1440px",         // limit like your layout
//       border: "1px solid #ccc",y

//       opacity: 1,
//       margin: "0 auto",           // center it
//       }}
//     /> */}
//     <hr
//       style={{
//       width: "1440px",
//       height: "0px",
//       border: "1px solid #ccc",
//       opacity: 1,
    
//       top: "142px",
//       left:10,
//       right:10,
//       marginTop:"100px",
    
//     }} 
//     />

      
     
//     </>
//   );
// }

// /* ------- Inline SVG icons (no external deps) ------- */
// function ChevronDown() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
//       <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   );
// }

// function SearchIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//       <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
//       <path d="M20 20l-3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   );
// }

// function HeartIcon() {
//   return (
//     <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
//       <path
//         d="M12.1 20.3l-1.1-1C6.1 15 3 12.2 3 8.9 3 6.2 5.2 4 7.9 4c1.5 0 2.9.7 3.8 1.8C12.6 4.7 14 4 15.5 4 18.2 4 20.4 6.2 20.4 8.9c0 3.3-3.1 6.1-8 10.4l-0.3.3z"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }

// // function CartIcon() {
// //   return (
// //     <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
// //       <circle cx="9" cy="20" r="1.5" />
// //       <circle cx="18" cy="20" r="1.5" />
// //       <path
// //         d="M3 3h2l2.4 12.3A2 2 0 0 0 9.3 17H18a2 2 0 0 0 2-1.6l1.5-8.4H6.2"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //       />
// //     </svg>
// //   );
// // }


// function CartIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
//       {/* Cart body */}
//       <path
//         d="M8 8h2l2 10h10l2-8H10"
//         fill="none"
//         stroke="black"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       {/* Wheels */}
//       <circle cx="14" cy="24" r="1.5" fill="black" />
//       <circle cx="22" cy="24" r="1.5" fill="black" />

//       {/* Badge circle */}
//       <circle cx="24" cy="8" r="6" fill="#DB4444" />

//       {/* Badge number */}
//       <text
//         x="24"
//         y="10"
//         textAnchor="middle"
//         fontFamily="Poppins, sans-serif"
//         fontSize="12"
//         fontWeight="400"
//         fill="#FAFAFA"
//       >
//         2
//       </text>
//     </svg>
//   );
// }



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FaUserCircle } from "react-icons/fa"; // ✅ FIX: import user icon
// import styles from "./Header.module.css";
// import AccountDetail from "./AccountDetail";

// export default function Header() {
//   const [langOpen, setLangOpen] = useState(false);
//   const [showAccount, setShowAccount] = useState(false);

//   return (
//     <>
//       <header className={styles.header}>
//         {/* Top promo bar */}
//         <div className={styles.promoBar}>
//           <div className={styles.container}>
//             <p className={styles.promoText}>
//               Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
//               <Link href="#" className={styles.shopNow}>
//                 ShopNow
//               </Link>
//             </p>

//             {/* Language Dropdown */}
//             <div
//               className={styles.lang}
//               onMouseEnter={() => setLangOpen(true)}
//               onMouseLeave={() => setLangOpen(false)}
//             >
//               <button
//                 className={styles.langBtn}
//                 aria-haspopup="listbox"
//                 aria-expanded={langOpen}
//                 onClick={() => setLangOpen((v) => !v)}
//               >
//                 English
//                 <ChevronDown />
//               </button>
//               {langOpen && (
//                 <ul className={styles.langList} role="listbox">
//                   <li role="option">English</li>
//                   <li role="option">हिन्दी</li>
//                   <li role="option">Français</li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main nav */}
//         <div className={styles.mainNavWrapper}>
//           <nav className={`${styles.container} ${styles.mainNav}`}>
//             <Link href="/" className={styles.brand}>
//               Exclusive
//             </Link>

//             <ul className={styles.links}>
//               <li>
//                 <Link href="/" className={`${styles.link} ${styles.active}`}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className={styles.link}>
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className={styles.link}>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/signup" className={styles.link}>
//                   SignUp
//                 </Link>
//               </li>
              
                
//             </ul>

//             <div className={styles.actions}>
//               <div className={styles.search}>
//                 <input
//                   aria-label="Search"
//                   placeholder="What are you looking for?"
//                 />
//                 <button aria-label="Search">
//                   <SearchIcon />
//                 </button>
//               </div>

//               <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
//                 <HeartIcon />
//               </Link>

//               <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
//                 <CartIcon />
//               </Link>

//               {/* ✅ Account Dropdown */}
              
//               <div className={styles.accountWrapper} onClick={() => setShowAccount((prev) => !prev)}>
//                 <FaUserCircle size={20} /> {/* 👤 icon inside red circle */}
//               </div>

//               {showAccount && (
//                 <div className={styles.accountDropdown}>
//                   <AccountDetail onClose={() => setShowAccount(false)} />
//                 </div>
//               )}

//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* ✅ Clean HR */}
//       <hr
//         style={{
//           width: "100%",
//           maxWidth: "1440px",
//           border: "1px solid #ccc",
//           margin: "40px auto 0",
//         }}
//       />
//     </>
//   );
// }

// /* ------- Inline SVG icons ------- */
// function ChevronDown() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
//       <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   );
// }

// function SearchIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//       <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
//       <path d="M20 20l-3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   );
// }

// function HeartIcon() {
//   return (
//     <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
//       <path
//         d="M12.1 20.3l-1.1-1C6.1 15 3 12.2 3 8.9 3 6.2 5.2 4 7.9 4c1.5 0 2.9.7 3.8 1.8C12.6 4.7 14 4 15.5 4 18.2 4 20.4 6.2 20.4 8.9c0 3.3-3.1 6.1-8 10.4l-0.3.3z"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }

// function CartIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
//       <path
//         d="M8 8h2l2 10h10l2-8H10"
//         fill="none"
//         stroke="black"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <circle cx="14" cy="24" r="1.5" fill="black" />
//       <circle cx="22" cy="24" r="1.5" fill="black" />
//       <circle cx="24" cy="8" r="6" fill="#DB4444" />
//       <text
//         x="24"
//         y="10"
//         textAnchor="middle"
//         fontFamily="Poppins, sans-serif"
//         fontSize="12"
//         fontWeight="400"
//         fill="#FAFAFA"
//       >
//         2
//       </text>
//     </svg>
//   );
// }
 


"use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FaUserCircle } from "react-icons/fa";
// import styles from "./Header.module.css";
// import AccountDetail from "./AccountDetail";
// import Wishlist from "./Wishlist"; // ✅ import your wishlist component
// import { ChevronDown, HeartIcon, SearchIcon,CartIcon } from "lucide-react";

// export default function Header() {
//   const [langOpen, setLangOpen] = useState(false);
//   const [showAccount, setShowAccount] = useState(false);
//   const [showWishlist, setShowWishlist] = useState(false); // ✅ state for wishlist

//   return (
//     <>
//       <header className={styles.header}>
//         {/* Top promo bar */}
//         <div className={styles.promoBar}>
//           <div className={styles.container}>
//             <p className={styles.promoText}>
//               Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
//               <Link href="#" className={styles.shopNow}>
//                 ShopNow
//               </Link>
//             </p>

//             {/* Language Dropdown */}
//             <div
//               className={styles.lang}
//               onMouseEnter={() => setLangOpen(true)}
//               onMouseLeave={() => setLangOpen(false)}
//             >
//               <button
//                 className={styles.langBtn}
//                 aria-haspopup="listbox"
//                 aria-expanded={langOpen}
//                 onClick={() => setLangOpen((v) => !v)}
//               >
//                 English
//                 <ChevronDown />
//               </button>
//               {langOpen && (
//                 <ul className={styles.langList} role="listbox">
//                   <li role="option">English</li>
//                   <li role="option">हिन्दी</li>
//                   <li role="option">Français</li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main nav */}
//         <div className={styles.mainNavWrapper}>
//           <nav className={`${styles.container} ${styles.mainNav}`}>
//             <Link href="/" className={styles.brand}>
//               Exclusive
//             </Link>

//             <ul className={styles.links}>
//               <li>
//                 <Link href="/" className={`${styles.link} ${styles.active}`}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className={styles.link}>
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className={styles.link}>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/signup" className={styles.link}>
//                   SignUp
//                 </Link>
//               </li>
//             </ul>

//             <div className={styles.actions}>
//               <div className={styles.search}>
//                 <input
//                   aria-label="Search"
//                   placeholder="What are you looking for?"
//                 />
//                 <button aria-label="Search">
//                   <SearchIcon />
//                 </button>
//               </div>

//               {/* ✅ Toggle Wishlist instead of Link */}
//               <button
//                 className={styles.iconBtn}
//                 aria-label="Wishlist"
//                 onClick={() => setShowWishlist((prev) => !prev)}
//               >
//                 <HeartIcon />
//               </button>

//               {/* Cart */}
//               <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
//                 <CartIcon />
//               </Link>

//               {/* ✅ Account Dropdown */}
//               <div
//                 className={styles.accountWrapper}
//                 onClick={() => setShowAccount((prev) => !prev)}
//               >
//                 <FaUserCircle size={20} />
//               </div>

//               {showAccount && (
//                 <div className={styles.accountDropdown}>
//                   <AccountDetail onClose={() => setShowAccount(false)} />
//                 </div>
//               )}
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* ✅ Wishlist dropdown / modal */}
//       {showWishlist && (
//         <div className={styles.wishlistDropdown}>
//           <Wishlist />
//         </div>
//       )}

//       {/* ✅ Clean HR */}
//       <hr
//         style={{
//           width: "100%",
//           maxWidth: "1440px",
//           border: "1px solid #ccc",
//           margin: "40px auto 0",
//         }}
//       />
//     </>
//   );
// }




"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import styles from "./Header.module.css";
import AccountDetail from "./AccountDetail";
import Wishlist from "./Wishlist";
import Cart from "./Card"; // ✅ Import your Cart component
import { ChevronDown, HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false); // ✅ state for cart

  return (
    <>
      <header className={styles.header}>
        {/* Top promo bar */}
        <div className={styles.promoBar}>
          <div className={styles.container}>
            <p className={styles.promoText}>
              Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
              <Link href="#" className={styles.shopNow}>
                ShopNow
              </Link>
            </p>

            {/* Language Dropdown */}
            <div
              className={styles.lang}
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                className={styles.langBtn}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                English
                <ChevronDown />
              </button>
              {langOpen && (
                <ul className={styles.langList} role="listbox">
                  <li role="option">English</li>
                  <li role="option">हिन्दी</li>
                  <li role="option">Français</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className={styles.mainNavWrapper}>
          <nav className={`${styles.container} ${styles.mainNav}`}>
            <Link href="/" className={styles.brand}>
              Exclusive
            </Link>

            <ul className={styles.links}>
              <li>
                <Link href="/" className={`${styles.link} ${styles.active}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/signup" className={styles.link}>
                  SignUp
                </Link>
              </li>
            </ul>

            <div className={styles.actions}>
              {/* Search */}
              <div className={styles.search}>
                <input
                  aria-label="Search"
                  placeholder="What are you looking for?"
                />
                <button aria-label="Search">
                  <SearchIcon />
                </button>
              </div>

              {/* Wishlist toggle */}
              <button
                className={styles.iconBtn}
                aria-label="Wishlist"
                onClick={() => setShowWishlist((prev) => !prev)}
              >
                <HeartIcon />
              </button>

              {/* ✅ Cart toggle */}
              <button
                className={styles.iconBtn}
                aria-label="Cart"
                onClick={() => setShowCart((prev) => !prev)}
              >
                <ShoppingCartIcon />
              </button>

              {/* Account toggle */}
              <div
                className={styles.accountWrapper}
                onClick={() => setShowAccount((prev) => !prev)}
              >
                <FaUserCircle size={20} />
              </div>

              {showAccount && (
                <div className={styles.accountDropdown}>
                  <AccountDetail onClose={() => setShowAccount(false)} />
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Wishlist dropdown */}
      {showWishlist && (
        <div className={styles.wishlistDropdown}>
          <Wishlist />
        </div>
      )}

      {/*  Cart dropdown */}
      {showCart && (
        <div className={styles.cartDropdown}>
          <Cart />
        </div>
      )}

      {/* Divider */}
      <hr
        style={{
          width: "100%",
          maxWidth: "1440px",
          border: "1px solid #ccc",
          margin: "40px auto 0",
        }}
      />
    </>
  );
}

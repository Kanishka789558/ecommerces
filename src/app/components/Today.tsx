 "use client";

// import styles from "./today.module.css";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Today() {
//   // Countdown timer logic
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--; seconds = 59;
//         } else if (hours > 0) {
//           hours--; minutes = 59; seconds = 59;
//         } else if (days > 0) {
//           days--; hours = 23; minutes = 59; seconds = 59;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       img: "/gamepad.png",
//       discount: "-40%",
//       name: "HAVIT HV-G92 Gamepad",
//       oldPrice: "$160",
//       newPrice: "$120",
//       rating: 88,
//     },
//     {
//       id: 2,
//       img: "/keyboard.png",
//       discount: "-35%",
//       name: "AK-900 Wired Keyboard",
//       oldPrice: "$960",
//       newPrice: "$640",
//       rating: 75,
//     },
//     {
//       id: 3,
//       img: "/monitor.png",
//       discount: "-30%",
//       name: "IPS LCD Gaming Monitor",
//       oldPrice: "$400",
//       newPrice: "$370",
//       rating: 99,
//     },
//     {
//       id: 4,
//       img: "/chair.png",
//       discount: "-25%",
//       name: "S-Series Comfort Chair",
//       oldPrice: "$400",
//       newPrice: "$375",
//       rating: 99,
//     },
//   ];

//   return (
//     <section className={styles.todayWrapper}>
      {/* Header */}
      {/* <div className={styles.header}>
        <span className={styles.tag}>Today’s</span>
        <h2 className={styles.title}>Flash Sales</h2>

        {/* Countdown */}
        {/* <div className={styles.countdown}>
          <div>
            <p>{timeLeft.days.toString().padStart(2, "0")}</p>
            <span>Days</span>
          </div>
          <div>
            <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
            <span>Hours</span>
          </div>
          <div>
            <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
            <span>Minutes</span>
          </div>
          <div>
            <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
            <span>Seconds</span>
          </div>
        </div>

        {/* Arrows */}
        {/* <div className={styles.arrows}>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div> */}  
        // <div className={styles.header}>
        //     <div className={styles.left}>
        //         <div className={styles.tagBox}></div>
        //         <span className={styles.tag}>Today’s</span>
        //         <h2 className={styles.title}>Flash Sales</h2>
        //     <div/>
            

        //     <div className={styles.countdown}>
        //     {/* countdown blocks */}
        //     </div>

        //     <div className={styles.arrows}>
        //         <button>&lt;</button>
        //         <button>&gt;</button>
        //     </div>
        // </div>


      {/* Products */}
//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             <div className={styles.discount}>{p.discount}</div>
//             <Image src={p.img} alt={p.name} width={200} height={180} />
//             <h3>{p.name}</h3>
//             <div className={styles.price}>
//               <span className={styles.newPrice}>{p.newPrice}</span>
//               <span className={styles.oldPrice}>{p.oldPrice}</span>
//             </div>
//             <p className={styles.rating}>⭐ {p.rating}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }









// import styles from "./today.module.css";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Today() {
//   // Countdown timer logic
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       img: "/gamepad.png",
//       discount: "-40%",
//       name: "HAVIT HV-G92 Gamepad",
//       oldPrice: "$160",
//       newPrice: "$120",
//       rating: 88,
//     },
//     {
//       id: 2,
//       img: "/keyboard.png",
//       discount: "-35%",
//       name: "AK-900 Wired Keyboard",
//       oldPrice: "$960",
//       newPrice: "$640",
//       rating: 75,
//     },
//     {
//       id: 3,
//       img: "/monitor.png",
//       discount: "-30%",
//       name: "IPS LCD Gaming Monitor",
//       oldPrice: "$400",
//       newPrice: "$370",
//       rating: 99,
//     },
//     {
//       id: 4,
//       img: "/chair.png",
//       discount: "-25%",
//       name: "S-Series Comfort Chair",
//       oldPrice: "$400",
//       newPrice: "$375",
//       rating: 99,
//     },
//   ];

//   return (
//     <section className={styles.todayWrapper}>
//       {/* Header */}
//       <div className={styles.header}>
//         {/* <div className={styles.left}>
//            <div className={styles.tagBox}></div> 
//           <span className={styles.tag}>Today’s</span>
//           <h2 className={styles.title}>Flash Sales</h2>
//         </div> */}
//         <div className={styles.left}>
//             <div className={styles.tagRow}>
//                 <div className={styles.tagBox}></div>
//                 <span className={styles.tag}>Today’s</span>
//             </div>
//             <h2 className={styles.title}>Flash Sales</h2>
//         </div>


//         {/* Countdown */}
//         <div className={styles.countdown}>
//           <div>
//             <p>{timeLeft.days.toString().padStart(2, "0")}</p>
//             <span>Days</span>
//           </div>
//           <div>
//             <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
//             <span>Hours</span>
//           </div>
//           <div>
//             <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
//             <span>Minutes</span>
//           </div>
//           <div>
//             <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
//             <span>Seconds</span>
//           </div>
//         </div>

//         {/* Arrows */}
//         <div className={styles.arrows}>
//           <button>&lt;</button>
//           <button>&gt;</button>
//         </div>
//       </div>

//       {/* Products */}
//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             <div className={styles.discount}>{p.discount}</div>
//             <Image src={p.img} alt={p.name} width={200} height={180} />
//             <h3>{p.name}</h3>
//             <div className={styles.price}>
//               <span className={styles.newPrice}>{p.newPrice}</span>
//               <span className={styles.oldPrice}>{p.oldPrice}</span>
//             </div>
//             <p className={styles.rating}>⭐ {p.rating}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import styles from "./today.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Today() {
  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      img: "/gamepad.png",
      discount: "-40%",
      name: "HAVIT HV-G92 Gamepad",
      oldPrice: "$160",
      newPrice: "$120",
      rating: 88,
    },
    {
      id: 2,
      img: "/keyboard.png",
      discount: "-35%",
      name: "AK-900 Wired Keyboard",
      oldPrice: "$960",
      newPrice: "$640",
      rating: 75,
    },
    {
      id: 3,
      img: "/monitor.png",
      discount: "-30%",
      name: "IPS LCD Gaming Monitor",
      oldPrice: "$400",
      newPrice: "$370",
      rating: 99,
    },
    {
      id: 4,
      img: "/chair.png",
      discount: "-25%",
      name: "S-Series Comfort Chair",
      oldPrice: "$400",
      newPrice: "$375",
      rating: 99,
    },
  ];

  return (
    <section className={styles.todayWrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <div className={styles.tagBox}></div>
            <span className={styles.tag}>Today’s</span>
          </div>
          <h2 className={styles.title}>Flash Sales</h2>
        </div>

        {/* Countdown */}
        <div className={styles.countdown}>
          <div>
            <p>{timeLeft.days.toString().padStart(2, "0")}</p>
            <span>Days</span>
          </div>
          <div className={styles.colon}>
            <span></span>
            <span></span>
          </div>
          <div>
            <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
            <span>Hours</span>
          </div>
          <div className={styles.colon}>
            <span></span>
            <span></span>
          </div>
          <div>
            <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
            <span>Minutes</span>
          </div>
          <div className={styles.colon}>
            <span></span>
            <span></span>
          </div>

          <div>
            <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
            <span>Seconds</span>
          </div>
        </div>

        {/* Arrows */}
        <div className={styles.arrows}>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      {/* Products */}
      <div className={styles.products}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.discount}>{p.discount}</div>

            {/* Action buttons */}
            <div className={styles.actions}>
              <button className={styles.actionBtn}>
                {/* Heart icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 
                       7.636l1.318-1.318a4.5 4.5 0 116.364 
                       6.364L12 21.364l-7.682-7.682a4.5 
                       4.5 0 010-6.364z"
                  />
                </svg>
              </button>

              <button className={styles.actionBtn}>
                {/* Eye icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 
                       016 0zM2.458 12C3.732 7.943 
                       7.523 5 12 5c4.477 0 8.268 
                       2.943 9.542 7-1.274 4.057-5.065 
                       7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>

            <Image src={p.img} alt={p.name} width={200} height={180} />
            <h3>{p.name}</h3>
            <div className={styles.price}>
              <span className={styles.newPrice}>{p.newPrice}</span>
              
              <span className={styles.oldPrice}>{p.oldPrice}</span>
            </div>
            {/* <p className={styles.rating}>⭐ {p.rating}</p> */}
            {/* <div className={styles.rating}>
              {"★".repeat(p.rating)}
              {"☆".repeat(5 - p.rating)}
            </div> */}
            <div className={styles.rating}>
              {"★".repeat(Math.min(5, Math.max(0, Math.round(p.rating / 20))))}
              {"☆".repeat(5 - Math.min(5, Math.max(0, Math.round(p.rating / 20))))}
            </div>

          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
           View All Products
        </button>
       </div>
       <div className={styles.line}></div>;
    </section>
  );
}

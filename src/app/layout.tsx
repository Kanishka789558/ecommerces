



"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Home from "@/app/components/Home";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
          <Header />  
         {pathname === "/" ? <Home /> : children} 
          
          
          <Footer />  
      </body>
    </html>
  );
}

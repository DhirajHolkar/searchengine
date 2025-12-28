'use client';
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {

  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div className="app-wrapper">
          {pathname !== "/" && <Navbar/>}

          <main className="content">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar/Navbar";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Iskra's Portfolio",
  description: "Vocal and artist coach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

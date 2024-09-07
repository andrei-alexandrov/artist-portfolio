import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.scss";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Iskra's Portfolio",
  description: "Vocal and artist coach",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";

import '@fortawesome/fontawesome-free/css/all.min.css';
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

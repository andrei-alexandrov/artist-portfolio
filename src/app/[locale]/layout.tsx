import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../globals.scss";

export const metadata: Metadata = {
  title: "Iskra's Portfolio",
  description: "Vocal and artist coach",
  icons: {
    icon: "/favicon.png",
  },
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: "bg" | "en"
  }
}

const RootLayout: React.FC<Props> = ({
  children,
  params: { locale }
}) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;

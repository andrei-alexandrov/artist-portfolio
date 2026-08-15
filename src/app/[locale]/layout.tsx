import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { jost, eyesome } from "../fonts";
import { locales, type Locale } from "@/config";

import "../globals.scss";

const SITE_URL = "https://iskravocal.com";
const SITE_TITLE = "Iskra Milkova Angelova";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type MetadataProps = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({
  params: { locale },
}: MetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: t("description"),
    icons: {
      icon: "/favicon.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        bg: "/bg",
        en: "/en",
      },
    },
    openGraph: {
      title: SITE_TITLE,
      description: t("description"),
      url: `/${locale}`,
      locale: locale === "bg" ? "bg_BG" : "en_US",
      images: [
        {
          url: "/og-banner.png",
          width: 1200,
          height: 630,
          alt: SITE_TITLE,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description: t("description"),
      images: ["/og-banner.png"],
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} className={`${jost.variable} ${eyesome.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <SpeedInsights />
          {children}
          <Analytics />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

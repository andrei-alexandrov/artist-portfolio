import type { MetadataRoute } from "next";
import { locales } from "@/config";

const SITE_URL = "https://iskravocal.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return locales.map((locale) => ({
        url: `${SITE_URL}/${locale}`,
        lastModified: new Date(),
        alternates: {
            languages: {
                bg: `${SITE_URL}/bg`,
                en: `${SITE_URL}/en`,
            },
        },
    }));
}

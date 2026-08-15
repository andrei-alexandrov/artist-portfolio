"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/config";
import "./Switcher.scss";

export default function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale: Locale = pathname.startsWith("/en") ? "en" : "bg";

    const switchTo = (locale: Locale) => {
        if (locale === currentLocale) return;
        router.push(pathname.replace(/^\/(bg|en)/, `/${locale}`));
    };

    return (
        <div className="locale-switcher">
            <button
                type="button"
                className={`locale-option ${currentLocale === "bg" ? "active" : ""}`}
                onClick={() => switchTo("bg")}
                aria-current={currentLocale === "bg" ? "true" : undefined}
                aria-label="Български"
            >
                BG
            </button>
            <span className="locale-divider" aria-hidden="true">
                |
            </span>
            <button
                type="button"
                className={`locale-option ${currentLocale === "en" ? "active" : ""}`}
                onClick={() => switchTo("en")}
                aria-current={currentLocale === "en" ? "true" : undefined}
                aria-label="English"
            >
                EN
            </button>
        </div>
    );
}

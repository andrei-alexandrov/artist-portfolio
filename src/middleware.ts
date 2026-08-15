import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./config";

export default createMiddleware({
    locales: [...locales],
    defaultLocale,
});

export const config = {
    matcher: [`/`, `/(bg|en)/:path*`],
};

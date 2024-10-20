import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
    locales: ["bg", "en"],
    defaultLocale: "bg"
});

export default function (req: NextRequest): NextResponse {
    return nextIntlMiddleware(req)
}

export const config = {
    matcher: [`/`, `/(bg|en)/:path*`],
};
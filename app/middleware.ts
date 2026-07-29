import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const existingCountry = request.cookies.get("nova-country");
  if (existingCountry) return response;

  // On Vercel, geo headers are populated automatically at the edge.
  // Locally, this will be undefined — we fall back to "US".
  const country = request.headers.get("x-vercel-ip-country") ?? "US";

  response.cookies.set("nova-country", country, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
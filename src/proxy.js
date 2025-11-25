// src/proxy.js
import { NextResponse } from "next/server";

// The function must be named `proxy`
export function proxy(request) {
  // Read the cookie (set by your AuthProvider)
  const authCookie = request.cookies.get("auth")?.value;

  if (!authCookie) {
    // redirect to home if not logged in
    return NextResponse.redirect(new URL("/", request.url));
  }

  // allow the request to continue if cookie exists
  return NextResponse.next();
}

// Configure which routes this proxy applies to
export const config = {
  matcher: ["/createNewProduct/:path*", "/manageProduct/:path*"],
};

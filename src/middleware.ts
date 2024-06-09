import { type NextRequest, NextResponse } from "next/server";

//approach 1 (config method)

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }
// export const config = {
//   matcher: "/profile",
// };

//approach 2 (conditional)

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

//approach 2 (rewrite)

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.rewrite(new URL("/hello", request.url));
//   }
// }

//setting cookies
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
}
import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  const theme = request.cookies.get("theme");
  cookies().set("ResultPerPage", "20");

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("ResultPerPage"));

  return new Response("<h1></h1>Profile API Data (GET)</h1>", {
    headers: {
      "Content-Type": "text/html",
      "set-Cookie": "theme=dark",
    },
  });
}

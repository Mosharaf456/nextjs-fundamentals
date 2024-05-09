/*
http://localhost:3000/comments-two/2
http://localhost:3000/profile

Cookies are small pieces of data that a server sends to user,s web browser.
The browser may store the cookie and send it back to same server with the later request.
Cookies are used mainly three purposes:
1. Session management : like login, session card, game score etc.
2. Personalization: like user preferences, themes, and other settings.
3. Tracking : like recording and analyzing user behavior.

How to set/get cookies in NEXT JS.?

Caching in route handlers


*/
import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    // header read
    const requestHeaders = new Headers(request.headers);
    console.log("requestHeaders", requestHeaders.get("Authorization"));
    const headerList = headers();
    console.log("headerList", headerList.get("Authorization"));
    //header read end

    // set cookie by next js
    cookies().set("resultPerPage", "20");

    // read cookie by next js 
    const cookiesList = cookies().get("resultPerPage");
    console.log("cookiesList", cookiesList);

    // read cookie
    const theme = request.cookies.get("theme");
    console.log("theme", theme);

    // header, cookie write
    return new Response("<h1> Hello, Profile route handler data! </h1>", {  
        headers: { 
            "Content-Type": "text/html" ,
            "Set-Cookie": "theme=dark; SameSite=Strict; Secure; HttpOnly; Path=/; Expires=Wed, 09 Jun 2021 10:18:14 GMT"
        },
    });
}


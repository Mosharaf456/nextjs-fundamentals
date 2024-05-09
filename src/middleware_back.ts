/*
******Middleware***********
Middleware in NEXT.js is a powerful feature that offers a robust way to intercept and control the flow of requests
and responses in the application.

It does this at a global level significabtly echancing features like redirection,URL rewrite, authentication, headers and  cookies management, logging and more.
***middleware.js or middleware.ts ***
Middleware allows us to specify paths where it will be active.
Two main approaches to using middleware in NEXT.js:
1. Custom matcher config
2. Conditional statement in the route handler

Middleware can be used to:
- Redirect requests to a different URL.
- Rewrite the URL.
- Authenticate users.
- Manage headers and cookies.
- Perform logging.


Note: middleware.js or middleware.ts this file es kept into the src folder not app folder.

Middleware also allows to efficiently control and intercept the request and response cycle , enabling redirect
URL rewrite and the  manipulation of headers and cookies.COmplete first section on routing in next js 

*/
//  middleware also allows to rewrite the URL

import { NextResponse, type NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    // cookies and headers setting
    // cookies theme 
    // custom headers for all reponses 
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    if(!themePreference) {
        response.cookies.set("theme", "dark");
        response.headers.set("custom-header", "custom-value"); // custom headers for all reponses debugging purpose 
    }
    // must back this tailored response
    return response;


    // 2. Conditional statement in the route handler
    // if(request.nextUrl.pathname === "/profile") {
    //     // return NextResponse.redirect(new URL("/hello", request.url)); 
    //     return NextResponse.rewrite(new URL("/hello", request.url));  // URL rewrite to profile from hello route

    // }

    //1. Custom matcher config
    // console.log("middleware");
    // return NextResponse.redirect(new URL("/", request.url)); // /profile will match and  goes to / or root route page
}

//1. Custom matcher config
// export const config  = {
//     matcher: "/profile",
// };



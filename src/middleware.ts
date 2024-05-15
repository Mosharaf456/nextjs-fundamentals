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

middleware also allows to rewrite the URL

******Rendering techniques in NEXT.js********
******Static rendering is the default rendering strategy in the app router .
All route are automatically prepared at build time and served as static HTML files.

Prudction server - a optimized build is created once and you deploy that build. 

A developmnet server - a new build is created every time you make a change to the code and see immediately those changes.
We cann,t effort to build once , make changes , rebuild and so on .

In development mode, a page will be pre-rendered for every request but in production , a page is pre-rendered once when we run build command . 

Prefetching is a technique used to preload a route in the background before the user navigate to it. 

***Dynamic rendering is a server rendering strategy where route are rendered for each user at reuest time.
Dynamic functions are cookies(), headers(), serachParams object.

** Streaming that allows for progressive UI rendering from the server. 
Work is divided into smaller chunks and sent to the client as soon as they are ready.
This enables users to see the page content faster, without having to wait for the entire page to finish rendering on the server.

Streaming is integrated into Next js App router by default . 



*/


import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) { // Conditional statement in the route handler
    if(request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/hello", request.url)); 
    }

    // Custom matcher config
    return NextResponse.redirect(new URL("/", request.url)); // /profile will match and  goes to / or root route page
}

// Custom matcher config
export const config  = {
    matcher: ["/about"],
};






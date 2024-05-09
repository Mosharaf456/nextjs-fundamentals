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


/*
Topic covered yet:
Route
definations
Pages and layout
Dynamic route 
Route groups 
Linking and navigation
Handling error in routes 
Parallel and intercepting routes 
Route handlers-- helps define restful API endpoint and middleware 
Cookies and headers



*****Rendering*******
Is the process that trnsforms the code you write into UI .

Choosing rendering is vital for building a performant application 
- Server side rendering
- Static site generation
- Client side rendering

CSS, SSR, and RSCs

rendering in react
Rendering in react is the process of converting react components into DOM elements 
that are displayed in the browser.
In react Client request -- and server response simple html div root element + JS reference that is bundle.js 

request js bundle.js  it is downloaded when html file is parsed 
Downloaded JS code then generate html code on your pc and insert it into the DOM under the root div element and you see the UI
in the browser. The evidence is inspect element in the browser that will show all html but not in the view source option.
This is called client side rendering(CSR)
This is the standard of SPAs with widespread adoption.

Draw back: 
dingle div tag that is not optimal for SEO.
As it is provides little content for search engine to index.
Large bundle size that can slow down the initial load time.
Waterfall of network req for API responses from deeply nested components may result 
meaningfull content is not being rendered fast enough for a crawler to index it.

Fetching data computing UI and making HTML interactive can slow things down.
Users might see a blank screen or suspense loading spinner while page loads.

Each new feature  added to the app  increases the size of js bundle, prolonging the wait time
for users to see the UI.
It laid the ground work for interactive web app we see today but to enahance SEO and performance
developers started looking for better solutions like SSR.And alos it is limitations of CSR.

This is where server side rendering(SSR) comes in.




*/


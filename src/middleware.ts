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

***Server and Client component pattern in NEXT.js
Server components
- Fetching data 
- Directly accessing backend resources 
- Protecting sensitive information (Like access tokens and API keys) on the server. 
- keeping large dependencies server-side , which helps in reducing client-side javascript.

Client components
- Best using of adding interactivity 
- Handling event listeners(such as onClick(), onChange() etc)

- Mannaging state and lifecycle effects ( using hooks like useState(),useReducer(), useEffect())
- Using browser-exclusive APIs 
- Using custom hooks 
- Using React Class components 


****Serve-only code 

Certain code intended to execute only on the server . 
You might have module or function tha use multiple libraries , use environment variables, interact directly with database,
or process confidential information. 

Since js modules can be shared , it,s poosible for code that,s  meant only for the server to unintentionally end up in the client . 

If server-side code gets bundled into the client-side JS , it could lead to a bloated bundle size , expose sensitive information , or cause other security issues.
database queries, sensitive business logic.

It is crucial to ensure that server-only code is not included in the client-side code to protect the application's security and integrity.
Provides built time error if dev accidentally imports server-only code in client-side code.


TO ensure server-side only function code then install the following package: server-only package
> npm install server-only
import "server-only";


it " import "server-only"; " will throw an error if it is imported in the server-side code.
For accidentally importing server-side code in the client-side code, the server-only package provides a built-time error to prevent it from happening.

***Third party packages 
npm i react-slick slick-carousel @types/react-slick 

If you need to use client component inside server component then use the following : 
use the folder outside of app folder and make a folder inside src named as components , make a client component inside client component, import that client component inito the server component and call that also.

*************Context Providers*********
Context providers are typically rendered near the root of an application to share global application state and logic 

However react context is not supported in Server Components , attempting to create a context at the root of your application will result in an error. 

To address this , you can create a context and render its provider inside a separate client component.
Note: In NEXT js project the file is layout.js in the src->app->layout.js
Invoking or wrapping the server component with the client component will allow you to use context providers in your application.
But server still be server component and client will be client component.That server component will not converted into client component .


****Client only code 
Just as it,s importent to restrict certain operations to the server, it,s equally important to confine some functinality to the client.

Client-only code typically with browser-specific features like DOM, the window object, localstorage etc whcih are not aviailable on the server.
To prevent unintended server side usage of client side code , we can use a package called client-only.

> npm install client-only
import "client-only"
It will throw an error if it is imported in the server-side code.

***Client component placement**
To compensate for server components not being able to manage state and handle interactivity , you need to create client components. 
It,s recomended to position these client components lower in your component tree. 

"use client" used in the parent component of the client component to make it client component.
Parent also affects every child component and make it as a client component as well. 
->src->components->Parent.tsx 
->src->components->Child.tsx

So it,s recomended to position these client components lower in your component tree, ideally making them leaf component .

***** Interleaving Server and Client Components 
- interleaving

Any component inside server component can call both client and server component.
But inside client component can,t call server component.
Because client component automatically convert server to client component when is it called inside client component.
It thriggers the error. Because server component rendered before client component so you can,t call server component inside client component.
Not supported next js. You can pass it as a props to the client component. React children props. 



*/


import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) { // Conditional statement in the route handler
    if(request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/hello", request.url)); 
    }

    // Custom matcher config
    return NextResponse.redirect(new URL("/", request.url)); // /contact will match and  goes to / or root route page
}

// Custom matcher config
export const config  = {
    matcher: ["/contact"], // /contact will match and goes to / route page
};






/*
** Caching in route handlers
http://localhost:3000/time
In production modd it will Caching in route handlers of the time , time will not update on every request after first.

Router handlers are cached by default in production mode when using GET method with the response object in NEXT.js

How to opt out of caching in NEXT.js?
- dynamic mood is used to opt out of caching in NEXT.js in segment Config Option
- using Request object with the GET method 
- employing dynamic functions like headers() and cookies() in the route handler
- using any HTTP method other then GET 

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


*/

export const dynamic = "force-dynamic";

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    });
}
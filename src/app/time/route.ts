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


*/

export const dynamic = "force-dynamic";

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    });
}
/*
****Route handlers
We can also create custom request handlers for our routes using a feature called route handlers.
Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints, giving you full
control over the response data.
There is no overhead of having to create and configure a separate server, as the route handlers are built into the Next.js app.

****$$$ Route handlers are also great for making external API requests.
$$$Route handlers run server-side , ensuring that sensitive data like private keys remain secure and never exposed to the client / browser.

$$$$ Router handlers are equivalent of API routes in Page router.
npx create-next-app route-handlers-demo --ts


function name must be match with HTTP verb  , it is convention

GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, CONNECT, TRACE
1. route handlers can be organized in a folder structure, similar to page routes for cleaner and easier organized management.
2. Midful of potential conflicts between route handlers and page routes, as they share the same directory structure.
Note: By default route.ts file access if same level of folders file page.tsx, route.ts , so change it directory name to api for route.ts 
to avoid conflict with page.tsx file.


 */
export async function GET() {
    return new Response("Hello, World!");
}
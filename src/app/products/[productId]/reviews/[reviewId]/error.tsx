/*
******Error handling : 
affect only that module and other modules will work fine
special file : error.tsx
The error.tsx file is a special file that is used to display an error message when a specific route segment fails to load.
The error.tsx file is optional and can be created in any route segment directory.

Production build : 
 npm run build
After build the Production run:
npm run start

In production we can see ErrorBoundary error in review id

In production we can see ErrorBoundary error in review id

Automatically wrap page.tsx and also it,s nested children or route within React Error Boundary.

*/
"use client";
export default function ErrorBoundary() {
    return (
        <div>
            <h1>ErrorBoundary error in review id</h1>
        </div>
    )
}
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


**** recovering from errors : props named as reset which is a function that can be called to reset the error boundary state.
recovering from errors which is not complex error so handy props named as reset function recieved props.
When recover client side then we need to convert the pages.tsx as client side component as well "use client";. 

*** Handling errors in nested routes
Errors bubble up up to closest parent error boundary.
An error.tsx file will cater to errors for all its nested child segments.

By possitioning the error.tsx file at different levels in nested folder of the route , you can achieve a more granular error handling strategy.

Note: recommended to place error.tsx in specific route segment directory to handle errors for that specific route segment.


*/
"use client";

export default function ErrorBoundary({ 
    error, 
    reset 
}: { 
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h1>
                {error.message} <button onClick={reset}>Try again</button>
            </h1>
        </div>
    )
}
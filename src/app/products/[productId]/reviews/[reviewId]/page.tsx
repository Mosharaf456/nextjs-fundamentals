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

http://localhost:3000/products/10088/reviews/1

*/

"use client";

import Link from "next/link"; // for client side navigation
import { notFound } from "next/navigation";   // programatically render not found page 

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}
export default function Reviews({ params } : {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    const random = getRandomInt(2);
    if(random == 1) {
        // Error handling 
        throw new Error('Something went wrong review ID, Error handling in Next.js');
    }

    // programatically render not found page if reviewId is greater than 10000
    if(parseInt(params.reviewId) > 10000) {
        notFound();
    }
    console.log('params: ', params);
    return (
        <div>
            <h1>Product Reviews</h1>
            <h3><Link href='/'>Home</Link></h3>
            <h3><Link href='/products'>Product Lists</Link></h3>
            <h1>Prduct ID: {params.productId} Review ID: {params.reviewId}</h1>
        </div>
    )
}
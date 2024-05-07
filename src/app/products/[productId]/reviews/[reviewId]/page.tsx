
// http://localhost:3000/products/10088/reviews/1
import Link from "next/link"; // for client side navigation
import { notFound } from "next/navigation";   // programatically render not found page 

export default function Reviews({ params } : {
    params: {
        productId: string,
        reviewId: string
    }
}) {
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
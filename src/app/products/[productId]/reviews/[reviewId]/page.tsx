
// http://localhost:3000/products/10088/reviews/1
import { notFound } from "next/navigation";

export default function Reviews({ params } : {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    if(parseInt(params.reviewId) > 10000) {
        notFound();
    }
    console.log('params: ', params);
    return (
        <div>
            <h1>Prduct ID: {params.productId} Review ID: {params.reviewId}</h1>
        </div>
    )
}
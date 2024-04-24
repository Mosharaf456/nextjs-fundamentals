// http://localhost:3000/products/10088/reviews/1
export default function Reviews({ params } : {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    return (
        <div>
            <h1>Prduct ID: {params.productId} Review ID: {params.reviewId}</h1>
        </div>
    )
}
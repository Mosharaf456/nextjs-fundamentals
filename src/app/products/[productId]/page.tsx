/*
Every page in the app router receive a router parameter as a prop (object).

**********Dynamic Routes********
It is not always fesible to define route using static path/ predefined paths SPECIALLY FOR COMPLEX application.
Like 1000 of products, 1000 of users, 1000 of blogs etc not to add dir 1000 for that.
So Next js provides a way to create dynamic routes.
Dynamic routes are created by placing square brackets [] in the file name.

It is importent to use in the list detailed patteren in any UI.
*/
/* 
**********Here Nested Dynamic Routes********
http://localhost:3000/products/1/reviews/1
http://localhost:3000/products/1/reviews/2
Then comes the nested dynamic routes.

*/
export default function ProductDetails({ params }: {
    params: {
        productId: string
    }
}) {
    return (
        <h1>About Product Details {params.productId}</h1>
    )
}
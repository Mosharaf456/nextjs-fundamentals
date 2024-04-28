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

Note: Speaking of nested dynamic path segments , NEXT js offers another features to handle this scenario.
That is Catch-all Segements 
6. Documentation site 
http://localhost:3000/docs/feature1/concept1/example1
http://localhost:3000/docs/feature2/concept2/example1

Feature1 - concept 1, concept 2 , concept 3 
Feature2 - concept 1, concept 2 , concept 3 
F3 -
F4 -

Next JS has file system based routing mechanism.
400 routes the 400 folder files are created: Not feasible
Then use dynamic routes by replacing concept files . 

one file: Catch-all Segements feature could one file catch up all route segements in the URL.
[...slug] --- common convention for catch-all segements.
add basic page.tsx file in the folder.


*/

import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}

// export const generateMetadata = ({ params }: Props ): Metadata => {
//     return {
//         title: `Product ${params.productId}`,
//     }
// }

export const generateMetadata = async ({ params }: Props ): Promise<Metadata> => {
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Product ${params.productId}`)
        }, 100)
    });
    return {
        title: `Product ${params.productId}`,
    }
};

export default function ProductDetails({ params }: Props) {
    return (
        <h1>About Product Details {params.productId}</h1>
    )
}


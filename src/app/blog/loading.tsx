/*
*******special file: loading.tsx 
The loading.tsx file is a special file that is used to display a loading indicator while specific route segment,s content is loading.
The loading.tsx file is optional and can be created in any route segment directory.

The loading state appears immediately upon navigation, giving users the assurance that the application is responsive and actively loading content.

This loading.tsx file automatically wrap page.tsx and also it,s nested children or route within react suspense boundary.


*/

export default function Loading() {
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
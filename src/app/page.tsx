/*
**********Next js Routing********
Next js uses the file system to create routes for the application.
- Each file in the pages directory is a route.
URl paths that users can access in the browser are created from the file names and folders in your code base.
Convention:
All routes must be placed inside the app folder.
Every file that corresponds to a route must be named page.js or page.tsx
Each folder corresponds to a path segment in the browser URL.

After this convention are followed the file automatically be available as a route.




layout.tsx is the layout component that will be used to wrap all the pages in the application.
If we delete it along with the app folder next automatically populates it, when we load root route.
This file magically created. 

route is associated with a file based on the containing folders name. 
within the app folder page.tsx within the about folder is associated with the /about route.
Same as other folders and files.

If folder, file is not esits in the app folder then it will shows 404 not found page by next js js , didn,t need to manually worried about.

***Nested Routes***
- Nested routes are created by placing a folder inside another folder.
- The folder name is used as a path segment in the URL.
- The file inside the folder is used as the route.
- Nested routes can be nested to any depth.
- Nested routes can be used to create complex routing structures.
- Nested routes can be used to create a hierarchy of pages.

*/

/*
**********Dynamic Routes********
It is not always fesible to define route using static path/ predefined paths SPECIALLY FOR COMPLEX application.
Like 1000 of products, 1000 of users, 1000 of blogs etc not to add dir 1000 for that.
So Next js provides a way to create dynamic routes.
Dynamic routes are created by placing square brackets [] in the file name.

******Routing Metadata :********
Ensuring proper search engine optimization(SEO) is cucial for increasing visibility and attracting users.

Next js introduced the Metadata API which allows you to define metadata for each page.
Metadata ensure accurate and relevant information is displayed when the page is shared or indexed on social media or search engines.
Configuring metadata:
layout.tsx or page.tsx

Export static metadata object 
Or export dynamic generateMetadata function.

*********Metadata rules:********
Both layout.tsx and page.tsx can export metadata. If defined in a layout , it applies to all pages in that layout 
But if defined in a page, it applies only to that page.
Metadata is read in order , from the root level down to the final page level.

When there,s metadata in multiple places for the same route, they get combined, but page metadata will replace 
layout metadata if they have same properties.
This rule applies to any level of nested layouts and pages in the app.

Dynamic metadata --
the current route parameters, external data or metadata in parent segment.

To define dynamic metadata, export a function named generateMetadata that accepts the current route parameters as an argument.

*/
export default function Home() {
    return (
        <div>
            <h1>Welcome Home!</h1>
        </div>
    )
}
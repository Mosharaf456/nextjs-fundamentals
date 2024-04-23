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
export default function Home() {
    return (
        <div>
            <h1>Welcome Home!</h1>
        </div>
    )
}
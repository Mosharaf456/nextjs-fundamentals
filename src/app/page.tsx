/*

#1. React Server Components(RSC) Conditions:
React server component is a new architecture introduced by the React team in v18 which was quickly embraced by NEXT JS.
The architecture introduced a new way of creating React components, spilitting them into two types: 
- Server components and 
- Client components.

Server components
In NEXT JS , all components are server components by default.
reading file or fetching data from a database is done on the server component.
However , they don,t have the ability to use hooks or handle user interactions.

Client component
It,s necessary to add 'use client' at the top of the component file to create a client component.
They didn,t have the ability to read files like server components.
To use hooks or handle/manage user interactions, you need to create a client component.It,s traditional React component.



#2.**********Next js Routing********
NEXT JS has a file based routing mechanisim but doesn,t mean every file is not a route.

Next js uses the file system to create routes for the application.
- Each file in the pages directory is a route.
URl paths that users can access in the browser are created from the file names and folders in your code base.
**Routing Convention to make the file as a route:**
1. All routes must be placed inside the app folder.
2. Every file that corresponds to a route must be named page.js or page.tsx
3. Each folder corresponds to a path segment in the browser URL.

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


****Navigation****
Navigation in Next js is handled by the Link component.
To enable client side navigation Next.js provide us with the Link component.
The <Link> component is a React component that extends the HTML <a> element and it,s the primary way to navigate between routes in Next.js 
To use it , we need to import it from "next/link" 

*/

import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around', }}>
                <Link href="/about"> About </Link>
                <Link href="/products"> Products </Link>
                <Link href="/login"> Login </Link>
                <Link href="/register"> Register </Link>
            </div>
            <h1>Welcome Home!</h1>
        </div>
    )
}
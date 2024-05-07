/*
****Route Grpups - Allows us to logically group our routes and project files without affecting the URL path structure.
Ex: Implement authenticated routes.
Register, Login, Forgot password .

For good developer expricence :
Organoze routes and project files into groups based on sections or intent.
To group routes and project files, SIMPLY WRAP () ON THE PARENT FOLDER.
That folder will be treated as a route group. that name will not part of the URL.
It will organize our code.
Multiple level of route groups are used also.

http://localhost:3000/login
http://127.0.0.1:3000/login


Layouts 
A page is UI that is unique to a Route
A layout is UI that is shared across multiple pages in the app.
Define a layout in a file named as layout.js or  layout.tsx .
That component accept child props and render them.

Layout can be nexted

This approach of nested layout allows us to create layout that apply to only to specific areas of our app. 
 
 Route groups uses to organize your project in a manner that doesn,t affect the URL path structure.
 
 Another value of use of the route group is to selectively apply a layout to certain segments by leaving others unchanged.
 Large projects used with numerous layouts and route segments can be organized in a more manageable way.
 



*/
import Link from 'next/link';
export default function Login() {
    return (
        <>
            <Link href='/'>Home</Link>
            <h1>Login</h1>
        </>
    )
}
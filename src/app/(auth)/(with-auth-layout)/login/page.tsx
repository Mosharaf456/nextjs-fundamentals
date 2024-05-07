/*
****Route Groups - Allows us to logically group our routes and project files without affecting the URL path structure.
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

Layout can be nested

This approach of nested layout allows us to create layout that apply to only to specific areas of our app. 


*/
import Link from 'next/link';
export default function Login() {
    return (
        <>
            <Link href='/'>Home</Link>
            <h1>Login page</h1>
            <input type='text' placeholder='Username' />
            <br />
            <br />
            <input type='password' placeholder='Password' />
            <br />
            <br />
            <button>Login</button>
        </>
    )
}
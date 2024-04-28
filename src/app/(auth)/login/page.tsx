/*
Route Grpups - Allows us to logically group our routes and project files without affecting the URL path structure.
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

*/
export default function Login() {
    return (
        <h1>Login</h1>
    )
}
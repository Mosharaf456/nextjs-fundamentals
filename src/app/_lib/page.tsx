/*
This is a private route that can't be viewed on the browser.
Contd.
1. Separating UI logic from routing logic.
2. Consistently organising internal files across a project.
3. For sorting and grouping files in code editors.
4. For avoiding potential naming conflicts with other future Next.js file conventions.

On side note - if you want to include an underscore in the URL, you can prefix folder name with %5F , which is the URL-encoded form of an underscore.
And acessible on the url with _lib


*/ 
export default function PrivateRoute() {
    return (
        <h1>Private Route: can,t view on the browser.</h1>
    );
}
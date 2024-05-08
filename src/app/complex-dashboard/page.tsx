/*
******Parallel routes 
Parallel routes are defined in Next.js using feature know as slots
Slots helps structure our content in a modular fashion
To define a slot, we use `@folder` naming convention.
Each slot then automatically passed as a prop to its corresponding `layout.tsx` file.

Benifits:
Ability to spilt a single layout into various slots , making code more manageable

*Independent route handling
-Parallel own loading and error handling
-Where different sections of the page load at varying speed  or encounter errors

sub-navigation --seemless exprience within each parallel routes
-Each slot of your dashboard can essentially function as a mini-application,
complete with its own navigation and state mangement.
-This is especially useful in a complex application such as our dashboard
where different sections serve distinct purposes.


*/


export default function ComplexDashboard() {
    return (
        <div>
            <h1>Complex Dashboard</h1>
        </div>
    );
}
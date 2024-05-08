/*
*****Conditional Routes*****
Parallel routes offers a way to implement conditional routing
for instance based on user authentication state, can choose the dashboard for authenticated user 
or a login for those are not authenticated.
This is powerfull as it enables fully separated code on the same URL.
Note: If you didn,t see the dev server , please restart the dev server
npm run dev

*/
import Card from "@/components/Card";

export default function Login() {
    return (
        <Card>Login Page</Card>
    );
}
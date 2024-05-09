import Card from "@/components/Card";

export default function DefaultLogin() {
    return (
        <Card>
            <h1>Login page</h1>
            <input type='text' placeholder='Username' />
            <br />
            <br />
            <input type='password' placeholder='Password' />
            <br />
            <br />
            <button>Login</button>
        </Card>
    );
}
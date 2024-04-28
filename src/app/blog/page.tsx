import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: 'My Blog - MH',
    }
}

export default function Blog() {
    return (
        <div>
            <h1>My Blog</h1>
        </div>
    )
}
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "About Page- Fundamentals of NEXT JS",
}

export default function About() {
    return (
        <div>
            <Link href='/'>home</Link>
            <h1>About Page</h1>
        </div>
    )
}
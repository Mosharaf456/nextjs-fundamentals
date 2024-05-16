"use client";

import Link from 'next/link'
import { useUser } from '@/components/AuthProvider';


export default function About() {
    console.log("Client component About Page");
    const user = useUser();
    console.log(user.userDetails);
    return (
        <div>
            <Link href='/'>home</Link>
            <h1>About Page</h1>
        </div>
    )
}
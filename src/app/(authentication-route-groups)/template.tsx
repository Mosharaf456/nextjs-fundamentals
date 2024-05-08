/* 
To determine the active links NEXT JS provides usePathname hook FROM next/navigation. 
This hook returns the current URL path.
ex. /login, /register, /forgot-pass

layout commonly shared to the component, the elements of the page like header, footer, and navigation. but keep untouch the common elements.
but change the the main content of the component page as children. so that the layout can be used for multiple pages.
But if need to create new instance for each of their children of navigation.
For such situation you can use template.
Template: are similer to layout but it is used to create new instance mounted for each of their children.
DOM element recreated so state is not preserved and effects re-synchronized. 

A template is a React component that wraps its children in a new instance of the component.
A template can be defined by exporting a default React component from a template.js or template.jsx file.
Similar to layouts , templates also receive children as prop which will render the nested segments in the route.




*/

"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import "./style.css";

export default function AuthenticationLayout({ children }: { children: React.ReactNode}) {
    const navLinks = [
        { name: 'Login', href: '/login1' },
        { name: 'Register', href: '/register1' },
        { name: 'Forgot Password', href: '/forget-pass' },
    ];
    const pathname = usePathname();
    const [input, setInput] = useState('');

    return (
        <div>
            <div>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search"
                />
            </div>
            {navLinks.map(link => {
                const isActive =  pathname.startsWith(link.href)
                
                return (
                    <React.Fragment key={link.href}>
                        <br /> 
                        <Link 
                            href={link.href}
                            // style={{
                            //     color: isActive ? 'red' : 'black',
                            //     fontWeight: isActive ? 'bold' : 'normal',
                            // }}
                            // tailwind css classes
                            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4" }
                        >
                            {link.name}
                        </Link>
                    </React.Fragment>
                    )
            })}
            
            {children}
        </div>
    )
}
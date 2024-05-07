/* 
To determine the active links NEXT JS provides usePathname hook FROM next/navigation. 
This hook returns the current URL path.
ex. /login, /register, /forgot-pass
*/

"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./style.css";

export default function AuthenticationLayout({ children }: { children: React.ReactNode}) {
    const navLinks = [
        { id:1, name: 'Login', href: '/login1' },
        { id:2, name: 'Register', href: '/register1' },
        { id:3, name: 'Forgot Password', href: '/forget-pass' },
    ];
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map(link => {
                const isActive =  pathname.startsWith(link.href)
                
                return (
                    <>
                        <br /> 
                        <Link 
                            key={link.id} 
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
                    </>
                    )
            })}
            
            {children}
        </div>
    )
}
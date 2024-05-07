import Link from 'next/link';

export default function AuthenticationLayout({ children }: { children: React.ReactNode}) {
    const navLinks = [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Forgot Password', href: '/forgot-pass' },
    ];
    return (
        <div>
            {navLinks.map(link => {
                return (
                    <>
                        <br /> 
                        <Link key={link.href} href={link.href}>
                            {link.name}
                        </Link>
                    </>
                    )
            })}
            
            {children}
        </div>
    )
}
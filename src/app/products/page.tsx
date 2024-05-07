import Link from 'next/link';
/*
replace - replace the current entry in the history state instead of instead of adding a new URL to this stack.
*/
export default function Products() {

    return (
        <>
            <Link href='/'>Home</Link>
            <h1>Products Page</h1>
            <h1><Link href='/products/1'>Product 1</Link></h1>
            <h1><Link href='/products/2'>Product 2</Link></h1>
            <h1><Link href='/products/3' replace>Product 3</Link></h1>

        </>
    )
}
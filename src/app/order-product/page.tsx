/*
 **Navigating programmatically 
Navigating programmatically - useRouter hook use to navigate to a different page by pushing a new URL to the router.
If you want to replace the route history instead of pushing the route into the stack, you can use the replace method instead of push.
router.replace('/login') - replace the current route with the new route.


 */
"use client";
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log('Product Ordered!');
        router.push('/');
        router.replace('/');
        router.back(); // go back to the previous page from browser history stack.
        router.forward(); // go forward to the next page .
    };
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Order</button>
        </div>
    )
}
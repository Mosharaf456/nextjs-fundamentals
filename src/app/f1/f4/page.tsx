import Link from "../../../../node_modules/next/link";

export default function f4() {
    return (
        <>
            <h1>Page F4</h1>
            <Link href="/f1/f3">F3</Link>
            <Link href="/about">About</Link>
        </>
    );
}
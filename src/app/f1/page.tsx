import Link from "../../../node_modules/next/link";

export default function f1() {
    return (
        <>
            <h1>Page F1</h1>
            <Link href="/f1/f2">F2</Link>
        </>
    );
}
/*
***Unmatched route
Navigating from UI:
UI Navigating Next.js retains the previously active state of a slot regardless of changes in the uRL.
But InPage reload:
Next.js immediately searches for a default.tsx file within each unmatched slot
Presence of this file critical, as it provides the default content that Next.js
will render in the user interface.

If this  default.tsx file missing in any of the unmatched slots for the current route Next.js will render a 404 error.
The `default.tsx` file in Next.js serves as a fallback to render content when the framework cannot 
retrieve a slot's active state from the current URL.

You have complete freedom to define the UI for unmatched routes:
you can either mirror the content found in page.tsx or craft an entirely custom view


*/
import Card from "@/components/Card";
import Link from "../../../../../node_modules/next/link";

export default function Archived(){
    return (
        <Card>
            <div>Archived Notification</div>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    );
}
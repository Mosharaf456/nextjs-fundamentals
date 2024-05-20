/*
Any component inside server component can call both client and server component.
But inside client component can,t call server component.
Because client component automatically convert server to client component when is it called inside client component.
It thriggers the error. Because server component rendered before client component so you can,t call server component inside client component.
Not supported next js. You can pass it as a props to the client component. React children props. 


*/


import { ServerComponentOne } from "@/components/Server-Component-One";
import { ServerComponentTwo } from "@/components/Server-Component-Two";
import { ClientComponentOne } from "@/components/Client-Component-One";

export default function Interleaving() {
    console.log("Server component Interleaving Page");

    return (
        <div>
            <h1>Interleaving Page</h1>
                <ServerComponentTwo/>
                
            <ClientComponentOne>
                <ServerComponentOne/>
            </ClientComponentOne>



        </div>
    )
}


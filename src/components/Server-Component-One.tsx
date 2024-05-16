import fs from 'fs';
import { ServerComponentTwo } from './Server-Component-Two';

export const ServerComponentOne = () => {
    fs.readFileSync("src/components/Server-Component-One.tsx")
    return (
        <div>
            <h1>Server Component One</h1>
            <ServerComponentTwo/>
        </div>
    )
}
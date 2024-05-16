import fs from 'fs';

export const ServerComponentTwo = () => {
    fs.readFileSync("src/components/Server-Component-Two.tsx")
    return (
        <div>
            <h1>Server Component Two</h1>
        </div>
    )
}
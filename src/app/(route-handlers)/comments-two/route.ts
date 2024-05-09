/* 
***Dynamic route handlers works similar like route handlers
{ params } = context 
context is an object that contains the request object and other properties
since we are not using parameter request so we can prefix it with underscore(_) 

*/

import { comments } from "./data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    };
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), { 
        headers: { "Content-Type": "application/json" },
        status: 201 
    });
}
/* { params } = context 
context is an object that contains the request object and other properties
since we are not using parameter request so we can prefix it with underscore(_) 

*/

import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(
    _request: Request, 
    { params }: { params: { id: string } }
) {
    if(parseInt(params.id) > comments.length ) {
        redirect("/comments-two");
    }

    const comment = comments.find(comment => comment.id === parseInt(params.id));
    if (!comment) {
        return new Response("Comment not found", { status: 404 });
    }
    return Response.json(comment);
}


export async function PATCH(
    request: Request, 
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    if (index === -1) {
        return new Response("Comment not found", { status: 404 });
    }
    comments[index].text = text;

    return Response.json(comments[index]);
    
}

export async function DELETE(
    _request: Request, 
    { params }: { params: { id: string } }
) {
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    if (index === -1) {
        return new Response("Comment not found", { status: 404 });
    }
    comments.splice(index, 1);

    return new Response("Comment deleted", { status: 200 });
}

export async function PUT(
    request: Request, 
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    if (index === -1) {
        return new Response("Comment not found", { status: 404 });
    }
    comments[index].text = text;

    return Response.json(comments[index]);
    
}



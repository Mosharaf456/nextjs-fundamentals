/* { params } = context 
context is an object that contains the request object and other properties
since we are not using parameter request so we can prefix it with underscore(_) 


*** Headers in route handlers
HTTP headers represent the metadata associated with an API request and response.

Request Headers:
1. Request headers are used to provide additional information about the request that send by client such as a browser.
2. Request headers are sent by the client to the server.
'User-Agent' which identifies the browser and operating system to the server.
'Accept' which specifies the media types that the client can understand.Like text,video or image formats that client can process.
'Authorization' which is used to authenticate the client to the server.
Response Headers:
1. Response headers that sent back from server to client . The provide additional information about the server's and the data being sent in response.

Content-Type: 
Indicates media type of the response.
What data format the response is in to the client from server
such as text/html for HTML ,documents, application/json for JSON data etc, XML, or plain text.



Content-Length: 1234
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Content-Length

How to read request header and send back response headers in NEXT JS.?
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



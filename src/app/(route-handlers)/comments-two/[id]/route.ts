import { comments } from "../data";
/* { params } = context 
context is an object that contains the request object and other properties
since we are not using parameter request so we can prefix it with underscore(_) 

*/
export async function GET(
    _request: Request, 
    { params }: { params: { id: string } }
) {
    const comment = comments.find(comment => comment.id === parseInt(params.id));
    if (!comment) {
        return new Response("Comment not found", { status: 404 });
    }
    return Response.json(comment);
}

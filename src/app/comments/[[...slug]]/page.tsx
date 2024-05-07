/* 
***optinal catch all segments 
any url can catch that contain /comments/* 
length 2 means 2 segments in the URL
http://localhost:3000/comments/feature1/concept1

optinal catch all route [[...slug]]
optinal catch all URL:
http://localhost:3000/comments
Same page will be rendered for both URL /comments/* , /comments

optional operator ? in typescript.

*/
export default function Comments({ params }: {
    params: {
        slug: string[]
    }
}) {
    if(params.slug?.length === 2) {
        return <h1>
            Comment home page feature{params.slug[0]} concept {params.slug[1]}
        </h1>
    } else if(params.slug?.length === 1) {
        return <h1>
            Comment home page feature {params.slug[0]}
        </h1>
    }
    return (
        <h1>Comment home page</h1>
    )
}
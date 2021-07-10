import useFetch from "../hooks/useFetch";

const Comments = ({ postId }) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const { data: comments } = useFetch(url);

    return (
        <div className="comment-list">
            { comments && <h2 className="gray">{ `${ comments.length } comments` }</h2>}
            { comments && comments.map((comment) => 
                <div className="comment" key={ comment.id }>
                    <h3>{ comment.name }</h3>
                    <p>{ comment.body }</p>
                </div>
            )}
        </div>
    );
}
 
export default Comments;
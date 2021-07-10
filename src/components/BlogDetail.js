import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Detail = () => {
    const params = useParams();
    
    const post_url = 'https://jsonplaceholder.typicode.com/posts/' + params.id;
    const { data: post, isPending, error } = useFetch(post_url);


    return (
        <div className="post-detail">
            { error && <div className="error">{ error }</div>}
            { isPending && <div className="is-pending">LOADING...</div>}
            { post && (
                <div>
                    <h1>{ post.title }</h1>
                    <p>{ post.body }</p>
                </div>
            )}
        </div>
    );
}
 
export default Detail;
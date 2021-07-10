import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Author = ({ userId }) => {
    const url = 'https://jsonplaceholder.typicode.com/users/' + userId;
    const { data: author, isPending, error } = useFetch(url);

    return (
        <div className="author-info">
            { error && <div>Couldn't get author info.</div> }
            { author && <div style={{ color: 'rgba(0,0,0,0.7)'}}>
                <span>Written by: </span>
                <Link to={ `/user/${author.id}` }>{ author.name }</Link>
            </div> }  
        </div>  
    );
}
 
export default Author;
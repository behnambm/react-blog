import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const User = () => {
    const params = useParams();

    const url = 'https://jsonplaceholder.typicode.com/users/' + params.id;
    const {data: user, isPending, error } = useFetch(url);

    const {data: posts} = useFetch(url + '/posts');

    return (
        <div className="user-detail">
            { error && <div className="error">{ error }</div>}
            { isPending && <div className="is-pending">LOADING...</div>}
            { user && (
                <div>
                    <h1>{ user.name }</h1>
                    <span className="gray">@{ user.username }</span>
                    
                    <p>E-Mail: <span className="gray"> { user.email }</span></p>
                    <p>
                        Address: 
                        <span className="gray">
                        { `${user.address.city}, ${user.address.street}  ${user.address.suite}` }
                        </span>
                    </p>

                    <p>Website: <a  className="gray" href={`https://${user.website}`}>{ user.website }</a></p>

                    <p>Working at: <span className="gray"> { user.company.name }</span></p>
                    <hr />

                    { posts && ( <BlogList posts={ posts } title={ `${user.name}'s Posts` }/> )}
                </div>
            )}
        </div>
    );
}
 
export default User;
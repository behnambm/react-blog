import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const { data, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    
    return (
        <div className="home">
            { error && <div className="error">{ error }</div>}
            { isPending && <div className="is-pending">LOADING...</div>}
            { data && <BlogList title="All posts" posts={data} /> }
        </div>
    );
}
 
export default Home;
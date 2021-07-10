import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json();
        }).then((resp_data) => {
            setData(resp_data);
        })
    }, [])

    return (
        <div className="home">
            { data && <BlogList title="All posts" posts={data} /> }
        </div>
    );
}
 
export default Home;
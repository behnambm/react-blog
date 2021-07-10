import { Link } from "react-router-dom";

const BlogList = ({ title, posts }) => {
    return (
        <div className="blog-list">
            { title && <div className="blog-list-title">{ title }</div> }
            { posts.map((post) =>
                <div className="post-card" key={ post.id }>
                    <Link to={ `/post/${post.id}` }>
                        <h4>{ post.title.slice(0, 35) }</h4>
                        <p>{ post.body.slice(0, 150) }</p>
                    </Link>
                </div>
            )}
        </div>
    );
}
 
export default BlogList;
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h1>Blog</h1></Link>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/create"><li>Create</li></Link>
            </ul>
        </div>
    );
}
 
export default Header;
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, body, userId: 1}

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json: charset=UTF-8'},
        }).then((res) => {
            if (!res.ok) {
                console.log(res);
                let msg = '';
                if (res.statusText === 'Not Found'){
                    msg = `${res.url} - Not Found !`;
                }
                throw Error(msg || res.statusText)
            } else {
                return res.json();
            }
        }).then(() => {
            history.push('/');
        }).catch((err) => {
            setError(err.message);
        })
    }

    return (
        <div className="create">
            <h2>Create new post</h2>
            <form  onSubmit={ handleSubmit }>
                <label>Title</label>
                <input
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label>Body</label>
                <textarea
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <button>Create</button>
            </form>

            { error && <div className="error">{ error }</div>}
        </div>
     );
}
 
export default Create;
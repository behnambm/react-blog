import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortController = new AbortController();
        setIsPending(true)
        
        fetch(url, { signal: abortController.signal} )
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            console.log(res)
            return res.json();
        }).then((resp_data) => {
            setData(resp_data);
            setIsPending(false);
            setError(null);
        }).catch((err) => {
            setError(err.message);
            setIsPending(false);
        })

        return () => abortController.abort();
    }, [url])

    return {data, isPending, error}
}
 
export default useFetch;
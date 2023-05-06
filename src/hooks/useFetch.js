import { useEffect, useState } from "react";
//fetch -> first render -> useEffect
//fetch -> dynamic -> url
//output > api's data
function useFetch(url) {

    let [data, setData ] = useState(null)
    let [loading , setLoading ] = useState(false);
    let [error, setError ] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then(res => {
            //throw error
            if (!res.ok) {
                throw Error('something wend wrong');
            }
            return res.json();
        })
        .then(data => {
            setData(data);  
            setError(null); 
            setLoading(false);
        }) 
        .catch(e => {
            setError(e.message);
        })
    }, [url]);
    return {data, loading, error};

}

export default useFetch;
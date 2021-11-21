import { useEffect, useState } from "react";

const useFetch = (key, fn) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await fn();
                const data = await resp[key];
                
                setApiData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
    
        fetchData();
    }, []);

    return { isLoading, apiData, error };
}

export default useFetch;
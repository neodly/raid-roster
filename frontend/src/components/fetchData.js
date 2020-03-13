import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, loading];
}


export const Fetcher = ({ url, children }) => {
    const [data, loading] = useFetch(url);
    if (loading) return 'loading';
    if (!data) return null;
    return children(data);
};

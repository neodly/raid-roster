import React, { useState, useEffect } from 'react';

import { CircularProgress } from '@material-ui/core';

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
    if (loading) return <CircularProgress />;
    if (!data) return null;
    return children(data);
};

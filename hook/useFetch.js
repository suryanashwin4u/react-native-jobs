import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': '2556947d84mshd1800168fa179b5p172e6cjsnd86a967089f9',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert("There is an error");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };

}

export default useFetch;
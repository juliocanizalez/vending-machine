import {useState, useEffect} from 'react';

const useInitialState = (API) => {

    const [foods, setFood] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setFood(data));
    }, []);

    return foods;
}

export default useInitialState;
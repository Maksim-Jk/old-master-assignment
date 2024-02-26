import {useState, useEffect} from 'react';
import {DataItem} from "@/models/sales.ts";

const useFetchData = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('sales.json');
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
                setIsLoading(false);
            }
        })()

    }, []);

    return {data, setData, isLoading};
};

export default useFetchData;
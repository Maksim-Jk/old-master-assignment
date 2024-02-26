import React, {useState} from 'react';
import styles from './styles.module.css';
import {DataItem} from "@/models/sales.ts";
import useFetchData from "@/hooks/useFetchData.ts";
import {tableColumns} from "@components/DataTable/lib/data.ts";

const DataTable: React.FC = () => {
    const {data, setData, isLoading} = useFetchData();
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');


    const handleSort = (column: string) => {
        setSortColumn(column);
        setSortDirection(prevDirection =>
            sortColumn === column && prevDirection === 'asc' ? 'desc' : 'asc'
        );

        const sortedData = [...data].sort((a: DataItem, b: DataItem) => {
            const aValue = a[column as keyof DataItem];
            const bValue = b[column as keyof DataItem];
            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });

        setData(sortedData);
    };

    const getSortIndicator = (column: string) => {
        if (sortColumn === column) {
            return sortDirection === 'asc' ? '▲' : '▼';
        }
        return null;
    };

    return (
        <div className={styles['table-container']}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <table>
                    <thead>
                    <tr>
                        {tableColumns.map(column => (
                            <th key={column.key} onClick={() => handleSort(column.key)}>
                                {column.label} {getSortIndicator(column.key)}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {tableColumns.map(column => (
                                <td key={column.key}>{item[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DataTable;
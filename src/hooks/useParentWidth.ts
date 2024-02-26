import {useEffect, useRef, useState} from 'react';

export const useParentWidth = () => {
    const [parentWidth, setParentWidth] = useState<number | undefined>(undefined);
    const barChartWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateParentWidth = () => {
            if (barChartWrapper.current) {
                const width = barChartWrapper.current.offsetWidth;
                setParentWidth(width);
            }
        };

        updateParentWidth();
        window.addEventListener('resize', updateParentWidth);

        return () => {
            window.removeEventListener('resize', updateParentWidth);
        };
    }, []);

    return {parentWidth, barChartWrapper};
};

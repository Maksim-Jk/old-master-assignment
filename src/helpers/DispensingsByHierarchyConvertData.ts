import {DataItem} from "@/models/sales.ts";

interface ChartData {
    name: string;
    value: number;
}

interface ProcessedData {
    chartData: ChartData[];
    days: number;
}

export const DispensingsByHierarchyConvertData = (data: DataItem[]): ProcessedData => {
    const chartDataMap = new Map<string, number>();
    const uniqueDates = new Set<string>();

    data.forEach(item => {
        const { path, summed_dispendings, local_date } = item;
        if (!chartDataMap.has(path)) {
            chartDataMap.set(path, summed_dispendings);
        } else {
            chartDataMap.set(path, chartDataMap.get(path)! + summed_dispendings);
        }
        uniqueDates.add(local_date);
    });

    let maxValue = 0;

    chartDataMap.forEach(value => {
        if (value > maxValue) {
            maxValue = value;
        }
    });

    const chartData: ChartData[] = Array.from(chartDataMap).map(([name, value]) => ({
        name,
        value
    }));

    return { chartData, days: uniqueDates.size };
};
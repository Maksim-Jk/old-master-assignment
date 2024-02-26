import {DataItem} from "@/models/sales.ts";
export function DispensingsGraphConvertData(data: DataItem[]): { chartData: { name: string; lastWeek: number; currentWeek: number }[]; lastWeekTotal: number; currentWeekTotal: number } {
    const today = new Date().getDay(); // Получаем сегодняшний день недели (0 - воскресенье, 1 - понедельник, и так далее)

    const dayNames: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Создаем массив данных для графика
    const chartData = dayNames.map((day, index) => {
        // Фильтруем данные для текущей недели (до сегодняшнего дня)
        const dataForCurrentWeek = data.filter(item => new Date(item.local_date).getDay() === index);

        // Фильтруем данные для прошлой недели (предыдущие 7 дней)
        const lastWeekStart = new Date();
        lastWeekStart.setDate(lastWeekStart.getDate() - (today + 6 + index) % 7); // Начало прошлой недели
        const lastWeekEnd = new Date();
        lastWeekEnd.setDate(lastWeekStart.getDate() + 6); // Конец прошлой недели
        const dataForLastWeek = data.filter(item => {
            const itemDate = new Date(item.local_date);
            return itemDate >= lastWeekStart && itemDate <= lastWeekEnd; // Фильтрация данных за прошлую неделю
        });

        // Вычисляем сумму данных для текущей недели
        const currentWeekSum = dataForCurrentWeek.reduce((acc, curr) => acc + curr.summed_dispendings, 0);

        // Вычисляем сумму данных для прошлой недели
        const lastWeekSum = dataForLastWeek.reduce((acc, curr) => acc + curr.summed_dispendings, 0);

        return {
            name: day,
            lastWeek: lastWeekSum,
            currentWeek: currentWeekSum,
        };
    });

    // Считаем сумму значений для текущей недели
    const currentWeekTotal = chartData.reduce((acc, curr) => acc + curr.currentWeek, 0);

    // Считаем сумму значений для прошлой недели
    const lastWeekTotal = chartData.reduce((acc, curr) => acc + curr.lastWeek, 0);

    return {
        chartData,
        lastWeekTotal,
        currentWeekTotal
    };
}

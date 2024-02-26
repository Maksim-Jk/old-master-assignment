import {DataItem} from "@/models/sales.ts";

export function HeaderConvertData(data: DataItem[]) {
    const machinesMap = new Map();
    const uniqueDays = new Set();

    data.forEach(item => {
        const {machine_number, summed_dispendings, local_date} = item;
        if (!machinesMap.has(machine_number)) {
            machinesMap.set(machine_number, summed_dispendings);
        } else {
            machinesMap.set(machine_number, machinesMap.get(machine_number) + summed_dispendings);
        }
        uniqueDays.add(local_date);
    });

    let totalCoffeeCups = 0;

    machinesMap.forEach(value => {
        totalCoffeeCups += value;
    });

    return {
        totalCoffeeCups: totalCoffeeCups,
        totalDays: uniqueDays.size,
        totalMachines: machinesMap.size
    };
}
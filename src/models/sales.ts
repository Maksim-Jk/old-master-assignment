export interface Sales {
    data: DataItem[]
}

export interface DataItem {
    custom_machine_name: string;
    path: string;
    product_group: string;
    machine_number: number;
    local_date: string;
    sku: string;
    recipie: string;
    cup_size: string;
    status: string;
    summed_dispendings: number;
}
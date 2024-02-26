import {DataItem} from "@/models/sales.ts";

interface TableColumn {
    key: keyof DataItem;
    label: string;
}

export const tableColumns: TableColumn[] = [
    {key: 'custom_machine_name', label: 'Custom Machine Name'},
    {key: 'path', label: 'Path'},
    {key: 'product_group', label: 'Product Group'},
    {key: 'machine_number', label: 'Machine Number'},
    {key: 'local_date', label: 'Local Date'},
    {key: 'sku', label: 'SKU'},
    {key: 'recipie', label: 'Recipie'},
    {key: 'cup_size', label: 'Cup Size'},
    {key: 'status', label: 'Status'},
    {key: 'summed_dispendings', label: 'Summed Dispendings'},
];

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
} from "recharts";
import {DataItem} from "@/models/sales.ts";
import styles from "./styles.module.css";
import {useParentWidth} from "@/hooks/useParentWidth.ts";
import {DispensingsByHierarchyConvertData} from "@/helpers/DispensingsByHierarchyConvertData.ts";


interface IDiscerningGraphProps {
    data: DataItem[]
}

export const DispensingsByHierarchyGraph: React.FC<IDiscerningGraphProps> = ({data}) => {
    const {chartData, days} = DispensingsByHierarchyConvertData(data);
    const {parentWidth, barChartWrapper} = useParentWidth();
    console.log(chartData, days)

    return (
        <div className={styles.graphWrapper}>
            <div className={styles.chartWrapper} ref={barChartWrapper}>
                <BarChart
                    width={parentWidth}
                    height={300}
                    data={chartData}
                    margin={{top: 0, right: 0, bottom: 0, left: -20}}
                    layout="vertical"
                >
                    <XAxis type="number"/>
                    <YAxis dataKey="name" type="category"/>
                    <Bar dataKey="value" fill="#8884d8" legendType={"circle"} maxBarSize={60}
                         label={{fill: 'white', fontSize: 16, position: 'insideRight', offset: 10}}
                    />
                </BarChart>
            </div>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <p className={styles.value}>{chartData[0].value}</p>
                    <p className={styles.label}>Dispensings were served <b>in the highest rank</b></p>
                </div>
                <div className={styles.infoItem}>
                    <p className={styles.value}>{chartData[0].name}</p>
                    <p className={styles.label}>on average per machine within the last <b>{days}</b> days</p>
                </div>
            </div>
        </div>
    );
}

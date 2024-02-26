import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import {DispensingsGraphConvertData} from "@/helpers/DispensingsGraphConvertData.ts";
import {DataItem} from "@/models/sales.ts";
import styles from "./styles.module.css";
import {useParentWidth} from "@/hooks/useParentWidth.ts";


interface IDiscerningGraphProps {
    data: DataItem[]
}

export const DispensingsGraph: React.FC<IDiscerningGraphProps> = ({data}) => {
    const {chartData, lastWeekTotal, currentWeekTotal} = DispensingsGraphConvertData(data);
    const {parentWidth, barChartWrapper} = useParentWidth();


    return (
        <div className={styles.graphWrapper}>
            <div className={styles.chartWrapper} ref={barChartWrapper}>
                <BarChart
                    width={parentWidth}
                    height={300}
                    data={chartData}
                    barGap={0}
                    margin={{top: 0, right: 0, bottom: 0, left: -20}}
                >
                    <Legend verticalAlign="top"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="currentWeek" fill="#8884d8" legendType={"circle"}/>
                    <Bar dataKey="lastWeek" fill="#82ca9d" legendType={"circle"}/>
                </BarChart>
            </div>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <p className={styles.value}>{currentWeekTotal}</p>
                    <p className={styles.label}>Dispensings were served within the <b>current</b> week</p>
                </div>
                <div className={styles.infoItem}>
                    <p className={styles.value}>{lastWeekTotal}</p>
                    <p className={styles.label}>Dispensings were served within the <b>previous</b> week</p>
                </div>
            </div>
        </div>
    );
}

import {
    BarChart,
    Bar,
    YAxis,
    Legend,
} from "recharts";
import styles from "./styles.module.css";
import {useParentWidth} from "@/hooks/useParentWidth.ts";

interface ICleaningsGraphDataItem {
    name: string;
    previousWeek: number;
    currentWeek: number;
}

const cleaningsData: ICleaningsGraphDataItem[] = [
    {
        name: 'Previous Week',
        previousWeek: 1.00,
        currentWeek: 0.46,
    },
]

export const CleaningsGraph = () => {
    const {parentWidth, barChartWrapper} = useParentWidth();

    return (
        <div className={styles.graphWrapper}>
            <div className={styles.chartWrapper} ref={barChartWrapper}>
                <BarChart
                    width={parentWidth}
                    height={300}
                    data={cleaningsData}
                    barGap={20}
                >
                    <Legend verticalAlign='bottom'
                            align='center'
                            layout='horizontal'
                            iconSize={0}
                            wrapperStyle={{bottom: 0, left: 40, right: 0}}
                    />
                    <YAxis/>
                    <Bar dataKey="currentWeek"
                         fill="#8884d8"
                         legendType={"circle"}
                         maxBarSize={100}
                         label={{fill: 'white', fontSize: 16, position: 'insideTop', offset: 10}}
                    />
                    <Bar dataKey="previousWeek"
                         fill="#82ca9d"
                         legendType={"circle"}
                         maxBarSize={100}
                         label={{fill: 'white', fontSize: 16, position: 'insideTop', offset: 10}}
                    />
                </BarChart>
            </div>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <p className={`${styles.value} ${cleaningsData[0].currentWeek > 0.5 ? styles['value--good'] : styles['value--bad']}`}>{cleaningsData[0].currentWeek.toFixed(2)}</p>
                    <p className={styles.label}>times on average war each machine cleaned per day within
                        the <b>current</b> week</p>
                </div>
                <div className={styles.infoItem}>
                    <p className={`${styles.value} ${cleaningsData[0].previousWeek > 0.5 ? styles['value--good'] : styles['value--bad']}`}>{cleaningsData[0].previousWeek.toFixed(2)}</p>
                    <p className={styles.label}>times on average war each machine cleaned per day within
                        the <b>previous</b> week</p>
                </div>
            </div>
        </div>
    );
}

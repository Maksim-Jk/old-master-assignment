import styles from "./styles.module.css";
import {ConsumptionsConvertData} from "@/helpers/ConsumptionsConvertData.ts";
import {DataCard} from "@components/DataCard";
import {ConsumptionsCategory, consumptionsData} from "@components/ConsumprionsStats/lib/data.ts";
import {DataItem} from "@/models/sales.ts";

interface Props {
    data: DataItem[]
    unitType: "METRIC" | "US";
}

export const ConsumptionsStats: React.FC<Props> = ({data, unitType}) => {
    const cardsData: Record<ConsumptionsCategory, number> = ConsumptionsConvertData(data, unitType)

    return (
        <div className={styles.cardsWrapper}>
            {consumptionsData.map((item, index) => (
                <DataCard
                    key={index}
                    data={{
                        iconSrc: item.iconSrc,
                        value: item.category && cardsData[item.category],
                        days: cardsData.days,
                        description: item.description,
                        unitType: item.unitType && unitType === "METRIC" ? item.unitType[0] : item.unitType && item.unitType[1],
                    }}
                />
            ))}
        </div>
    );
}

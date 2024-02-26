import styles from "./styles.module.css";
import {ConsumptionsConvertData} from "@/helpers/ConsumptionsConvertData.ts";
import {DataCard} from "@components/DataCard";

export const ConsumprionsStats: React.FC<any> = ({data}) => {

    const cardsData = ConsumptionsConvertData(data)

    return (
        <div className={styles.cardsWrapper}>
            <DataCard
                data={
                    {
                        iconSrc: "/images/water.png",
                        value: cardsData.water,
                        days: cardsData.days,
                        description: "liters of water"
                    }
                }
            />
            <DataCard
                data={
                    {
                        iconSrc: "/images/water.png",
                        value: cardsData.water,
                        days: cardsData.days,
                        description: "liters of water"
                    }
                }
            />
            <DataCard
                data={
                    {
                        iconSrc: "/images/water.png",
                        value: cardsData.water,
                        days: cardsData.days,
                        description: "liters of water"
                    }
                }
            />
            <DataCard
                data={
                    {
                        iconSrc: "/images/water.png",
                        value: cardsData.water,
                        days: cardsData.days,
                        description: "liters of water"
                    }
                }
            />
        </div>
    );
}

import styles from "./styles.module.css";
// import {ConsumptionsConvertData} from "@/helpers/ConsumptionsConvertData.ts";
import {DataCard} from "@components/DataCard";
import {ConsumptionsCategory, consumptionsData} from "@components/ConsumprionsStats/lib/data.ts";

export const ConsumprionsStats: React.FC<any> = ({data}) => {
  console.log(data)
  // const cardsData = ConsumptionsConvertData(data)
  const cardsData: Record<ConsumptionsCategory, number> = {
    "water": 1148800,
    "milk": 1299900,
    "powder": 173320,
    "beans": 114880,
    "syrup": 86.66,
    "days": 53
  }

  return (
    <div className={styles.cardsWrapper}>
      {consumptionsData.map((item, index) => (
        <DataCard
          key={index}
          data={{
            iconSrc: item.iconSrc,
            // value: item.category && cardsData[item.category],
            value: 23.342,
            days: cardsData.days,
            description: item.description
          }}
        />
      ))}
    </div>
  );
}

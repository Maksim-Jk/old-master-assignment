import {FC} from "react";
import styles from "./styles.module.css"

interface Props {
    unitType: "METRIC" | "US"
    setUnitType: (active: "METRIC" | "US") => void
}

export const ConsumptionsHeaderBtns: FC<Props> = ({unitType, setUnitType}) => {
    const activeBtn = unitType === "METRIC"

    return (
        <div className={styles.buttons}>
            <button
                className={[styles.button, activeBtn ? '' : styles["active"]].join(' ')}
                onClick={() => setUnitType("US")}
            >US
            </button>
            <button
                className={[styles.button, activeBtn ? styles["active"] : ''].join(' ')}
                onClick={() => setUnitType("METRIC")}
            >METRIC
            </button>
        </div>
    )
}
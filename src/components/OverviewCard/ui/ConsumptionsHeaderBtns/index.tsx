import {FC} from "react";
import styles from "./styles.module.css"

interface Props {
  active: "METRIC" | "US"
  setActive: (active: "METRIC" | "US") => void
}

export const ConsumptionsHeaderBtns: FC<Props> = ({active, setActive}) => {
  const activeBtn = active === "METRIC"

  return (
    <div className={styles.buttons}>
      <button
        className={[styles.button, activeBtn ? '' : styles["active"]].join(' ')}
        onClick={() => setActive("US")}
      >US
      </button>
      <button
        className={[styles.button, activeBtn ? styles["active"] : ''].join(' ')}
        onClick={() => setActive("METRIC")}
      >METRIC
      </button>
    </div>
  )
}
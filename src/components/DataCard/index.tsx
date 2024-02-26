import styles from "./styles.module.css"

interface IDataCardProps {
    data: {
        iconSrc?: string,
        value?: number,
        description: string,
        days?: number,
        unitType?: string
    }
}

export const DataCard: React.FC<IDataCardProps> = ({data}) => {

    return (
        <div className={styles.item}>
            {data.iconSrc && data.value && data.days ? (
                <>
                    <div className={styles.info}>
                        <div className={styles.header}>
                            <img src={data.iconSrc} className={styles.icon} alt="icon"/>
                            <p className={styles.value}>{data.value.toFixed(2)}</p>
                        </div>
                        <p className={styles.description}>{data.unitType}{data.description} were consumed within the
                            last<b> {data.days}</b> days</p>
                    </div>
                </>
            ) : (
                <div className={styles.info}>
                    <p className={styles.description}>{data.description}</p>
                </div>
            )}
        </div>
    );
}

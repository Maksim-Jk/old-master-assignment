interface IDataCardProps {
    data: {
        iconSrc: string,
        value: number,
        description: string,
        days: number
    }
}

export const DataCard: React.FC<IDataCardProps> = ({data}) => {
    console.log(data)

    if (!data) {
        return
    }

    return (
        <div>Карточка</div>
        // <div className={styles.item}>
        //     <div className={styles.icon}>
        //         <img src={data.iconSrc} alt="icon"/>
        //     </div>
        //     <div className={styles.info}>
        //         <p className={styles.value}>{data.value.toFixed(2)}</p>
        //         <p className={styles.description}>{data.description} were consumed within the
        //             last<b> {data.days}</b> days</p>
        //     </div>
        // </div>
    );
}

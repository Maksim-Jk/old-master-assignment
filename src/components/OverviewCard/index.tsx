import React, {ReactNode} from 'react';
import styles from './styles.module.css';

interface CardProps extends React.PropsWithChildren {
    title: string;
    control?: ReactNode;
}

const OverviewCard: React.FC<CardProps> = ({title, children, control}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{title}</h2>
                {control && control}
            </div>
            <div className={styles.body}>{children}</div>
        </div>
    );
};

export default OverviewCard;
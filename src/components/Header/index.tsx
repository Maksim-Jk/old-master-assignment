import styles from './styles.module.css';
import DataTime from "@components/DataTime";

import coffeeMakerIcon from '../../../public/assets/icons/coffee-maker.svg'
import coffeeCupIcon from '../../../public/assets/icons/coffee-cup.svg'
import {Link, useLocation} from "react-router-dom";
import useFetchData from "@/hooks/useFetchData.ts";
import {HeaderConvertData} from "@/helpers/HeaderConvertData.ts";


const Header = () => {
    const data = useFetchData();
    const {totalCoffeeCups, totalMachines, totalDays} = HeaderConvertData(data.data);
    const location = useLocation();
    let pageTitle;

    switch (location.pathname) {
        case '/overview':
            pageTitle = 'Overview';
            break;
        case '/sales':
            pageTitle = 'Sales';
            break;
        default:
            pageTitle = 'Overview';
            break;
    }

    return (
        <header className={`container ${styles.header} `}>
            <div className={styles.logo}>
                <h1>{pageTitle}</h1>
            </div>
            <div className={styles.nav}>
                <Link to="/sales">Sales</Link>
                <Link to="/overview">Overview</Link>
            </div>
            <div className={styles.data}>
                <ul className={styles.stats}>
                    <li className={styles.statsItem}>
                        <div className={styles.statsInfo}>
                            <img className={styles.statsLogo}
                                 src={coffeeMakerIcon}
                                 alt="active machines"/>
                            <span className={styles.statsValue}>{totalMachines}</span>
                        </div>
                    </li>
                    <li className={styles.statsItem}>
                        <div className={styles.statsInfo}>
                            <img className={styles.statsLogo}
                                 src={coffeeCupIcon}
                                 alt="saled coffee"/>
                            <div className={styles.dataCoffeeCupsValue}>
                            <span className={styles.statsValue}>
                                {totalCoffeeCups}
                            </span>
                            </div>
                        </div>
                        <p className={styles.statsDescription}>
                            within the last <span className={styles.statsDescriptionValue}>{totalDays}</span> days
                        </p>
                    </li>
                </ul>
                <DataTime/>
            </div>
        </header>
    );
};

export default Header;



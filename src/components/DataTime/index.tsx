import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Select from 'react-select';
import styles from './styles.module.css';
import syncIcon from '../../../public/assets/icons/sync.svg';

interface TimeZoneOption {
    value: string;
    label: string;
}

const DataTime: React.FC = () => {
    const [selectedTimezone, setSelectedTimezone] = useState<string>('UTC');
    const [selectedDateTime, setSelectedDateTime] = useState<string>(moment().utcOffset(selectedTimezone).format('DD.MM.YYYY HH:mm:ss'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDateTime = moment().utcOffset(selectedTimezone).format('DD.MM.YYYY HH:mm:ss');
            setSelectedDateTime(newDateTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [selectedTimezone, selectedDateTime]); // Перезапускаем useEffect при изменении selectedTimezone

    const handleTimeChange = (selectedOption: TimeZoneOption | null) => {
        if (selectedOption) {
            setSelectedTimezone(selectedOption.value);
        }
    };

    const timezoneOptions: TimeZoneOption[] = [
        {value: '+0000', label: 'UTC +00'},
        {value: '-0500', label: 'EST -05'},
        {value: '-0800', label: 'PST -08'},
    ];

    return (
        <div className={styles.timeWrapper}>
            <img className={styles.timeLogo} src={syncIcon} alt="sync"/>
            <p className={styles.timeValue}>{selectedDateTime}</p>
            <div className={styles.timeSelectWrapper}>
                <Select
                    className={styles.timeSelect}
                    options={timezoneOptions}
                    value={timezoneOptions.find(option => option.value === selectedTimezone)}
                    onChange={handleTimeChange}
                    defaultValue={timezoneOptions[0]}
                />
                <span className={styles.timeText}>Timezone (refresh date)</span>
            </div>
        </div>
    );
};

export default DataTime;

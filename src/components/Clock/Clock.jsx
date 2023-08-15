import { useEffect, useState } from 'react';
import styles from './Clock.module.css';

const options = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  month: 'long',
  day: '2-digit',
};

const Clock = () => {
  const [dateTime, setDateTime] = useState({ time: '', currentDate: '' });

  const updateTime = () => {
    const dateObject = new Date();
    const [currentDate, time] = dateObject
      .toLocaleString('en-US', options)
      .split('at');
    setDateTime({ time, currentDate });
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.clock}>{dateTime.time}</div>
      <div className={styles.date}>{dateTime.currentDate}</div>
    </div>
  );
};

export default Clock;

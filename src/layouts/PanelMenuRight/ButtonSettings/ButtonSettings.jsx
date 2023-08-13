import { useState } from 'react';
import Button from '../../../components/Button/Button';
import styles from './ButtonSettings.module.css';

const ButtonSettings = ({ openSetting }) => {
  // const [isFlipped, setIsFlipped] = useState();

  return (
    <Button
      onClick={() => {
        openSetting(true);
      }}
    >
      <span
        className={`material-symbols-rounded ${styles['material-symbols-rounded']} `}
        //${isFlipped ? `${styles.flip}` : `${styles['flip-return']}`}
      >
        settings
      </span>
    </Button>
  );
};

export default ButtonSettings;

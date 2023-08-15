// import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { PanelTypeEnum } from '../../../pages/Home';
import styles from './ButtonSettings.module.css';

const ButtonSettings = ({ openPanelType }) => {
  // const [isFlipped, setIsFlipped] = useState();

  return (
    <Button
      onClick={() => {
        openPanelType(PanelTypeEnum.ALLSETTING);
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

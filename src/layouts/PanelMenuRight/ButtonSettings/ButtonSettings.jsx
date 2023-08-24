// import { useState } from 'react';
import ButtonSmall from 'src/components/ButtonSmall/ButtonSmall';
import { PanelTypeEnum } from 'src/pages/Home';
import styles from './ButtonSettings.module.css';

const ButtonSettings = ({ openPanelType }) => {
  // const [isFlipped, setIsFlipped] = useState();

  return (
    <ButtonSmall
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
    </ButtonSmall>
  );
};

export default ButtonSettings;

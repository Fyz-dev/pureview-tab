import { useState } from 'react';
import styles from './GroupSetting.module.css';

const GroupSetting = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen && `${styles['main-container-open']}`}>
      <button
        // При закрытие добавляем подсветку при наведении мыши
        className={`${styles.button} ${
          !isOpen && styles['button-group-setting-close']
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className={styles.text}>{name}</span>
        <span
          className={`material-symbols-rounded ${styles.icon} ${
            isOpen
              ? `${styles['flip-anim']}`
              : `${styles['flip-anim-reverse']} ${styles['icon-anim-opacity']}`
          }`}
        >
          chevron_right
        </span>
      </button>
      {isOpen && <div className={styles['container-children']}>{children}</div>}
    </div>
  );
};

export default GroupSetting;

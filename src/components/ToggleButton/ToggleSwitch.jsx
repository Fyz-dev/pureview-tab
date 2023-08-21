import { useEffect, useRef } from 'react';
import styles from './ToggleSwitch.module.css';

//Закругление работают не динамически

const ToggleSwitch = ({ isChecked, onChange }) => {
  const switchRef = useRef(null);

  useEffect(() => {
    if (switchRef.current) {
      const heightSwitch = parseFloat(
        getComputedStyle(switchRef.current).getPropertyValue('height'),
      );
      switchRef.current.style.setProperty('width', heightSwitch * 2 + 'px');
    }
  }, []);

  return (
    <label className={styles.switch} ref={switchRef}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;

import { useState } from 'react';
import ToggleSwitch from 'src/components/ToggleSwitch/ToggleSwitch';
import styles from './AddShortcut.module.css';

const ButtonDialog = ({ onDone, onClose }) => (
  <div onClick={onDone} className={styles['container-dialog']}>
    <button className={`${styles['button-done']} material-symbols-rounded`}>
      done
    </button>
    <button
      onClick={onClose}
      className={`${styles['button-close']} material-symbols-rounded`}
    >
      close
    </button>
  </div>
);

const InputRow = ({ label, onChange }) => (
  <div className={styles['container-row']}>
    <span className={styles.text} style={{ minWidth: '50px' }}>
      {label}
    </span>
    <input type="text" className={styles.input} onChange={onChange} />
  </div>
);

const AddShortcut = ({ isHide }) => {
  const [showIconUrl, setShowIconUrl] = useState(false);

  const handleClose = () => isHide(true);

  return (
    <div className={styles['main-container']}>
      <div className={styles.container}>
        <img className={styles.icon} src={'vite.svg'} alt="Icon" />
        <div className={styles['container-input']}>
          <InputRow label="Site url" />
          {showIconUrl && <InputRow label="Icon url" />}

          <div className={styles['container-row']}>
            <span className={styles.text}>Autodetect icon url</span>
            <ToggleSwitch
              defaultChecked={!showIconUrl}
              onChange={() => setShowIconUrl(!showIconUrl)}
            />
          </div>
        </div>
      </div>
      <ButtonDialog onClose={handleClose}></ButtonDialog>
    </div>
  );
};

export default AddShortcut;

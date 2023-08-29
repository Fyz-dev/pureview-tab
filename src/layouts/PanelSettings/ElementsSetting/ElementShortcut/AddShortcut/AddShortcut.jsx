import { useState } from 'react';
import ToggleSwitch from 'src/components/ToggleSwitch/ToggleSwitch';
import styles from './AddShortcut.module.css';
import Shortcuts from 'src/stores/Shortcuts';
import getIconSite from 'src/utils/getIconSite';

//////////////////////////////////////
//   Need add validation for input  //
//////////////////////////////////////

const ButtonDialog = ({ onDone, onClose }) => (
  <div className={styles['container-dialog']}>
    <button
      onClick={onDone}
      className={`${styles['button-done']} material-symbols-rounded`}
    >
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
  const [isAutoDetected, setIsAutoDetected] = useState(true);
  const [url, setUrl] = useState('');
  const [urlIcon, setUrlIcon] = useState('');

  const handleDone = () => {
    if (isAutoDetected) Shortcuts.addShortcut({ url: url });
    else Shortcuts.addShortcut({ url: url, iconUrl: urlIcon });
    isHide(true);
  };

  const handleClose = () => {
    isHide(true);
  };

  const getIcon = () => (isAutoDetected ? getIconSite(url) || '' : urlIcon);

  return (
    <div className={styles['main-container']}>
      <div className={styles.container}>
        <img
          className={styles.icon}
          src={getIcon()}
          onError={(e) => {
            e.target.src = 'vite.svg';
          }}
        />
        <div className={styles['container-input']}>
          <InputRow label="Site url" onChange={(e) => setUrl(e.target.value)} />
          {!isAutoDetected && (
            <InputRow
              label="Icon url"
              onChange={(e) => setUrlIcon(e.target.value)}
            />
          )}

          <div className={styles['container-row']}>
            <span className={styles.text}>Autodetect icon url</span>
            <ToggleSwitch
              defaultChecked={isAutoDetected}
              onChange={() => setIsAutoDetected(!isAutoDetected)}
            />
          </div>
        </div>
      </div>
      <ButtonDialog onClose={handleClose} onDone={handleDone}></ButtonDialog>
    </div>
  );
};

export default AddShortcut;

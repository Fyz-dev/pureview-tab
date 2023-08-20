import Button from '../../../../components/Button/Button';
import ToggleSwitch from '../../../../components/ToggleButton/ToggleSwitch';
import Shortcuts from '../../../../stores/Shortcuts';
import styles from './ElementShortcut.module.css';

const ElementShortcut = () => {
  return (
    <div className={styles.container}>
      <div className={styles['container-element']}>
        <span className={styles.text}>Url: </span>
        <input
          type="text"
          placeholder="Enter the url"
          className={styles.input}
        ></input>
        <Button className={`material-symbols-rounded ${styles.button}`}>
          add
        </Button>
      </div>
      <div className={styles['container-element']}>
        <span className={styles.text}>Visible:</span>
        <ToggleSwitch
          isChecked={Shortcuts.isVisible}
          onChange={() => {}}
        ></ToggleSwitch>
      </div>
    </div>
  );
};
export default ElementShortcut;

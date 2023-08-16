import Button from '../../../../components/Button/Button';
import styles from './ElementShortcut.module.css';

const ElementShortcut = () => {
  return (
    <div className={styles.container}>
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
  );
};
export default ElementShortcut;

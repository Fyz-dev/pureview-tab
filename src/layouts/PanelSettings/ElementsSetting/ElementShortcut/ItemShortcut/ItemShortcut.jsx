import Shortcuts from 'src/stores/Shortcuts';
import styles from './ItemShortcut.module.css';

const ItemShortcut = ({ objShortcut }) => {
  const handlerDelete = () => {
    Shortcuts.removeShortcut(objShortcut.id);
  };

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={objShortcut.iconUrl} />
      <span className={styles.text}>{objShortcut.url}</span>
      <button className={styles['button-delete']} onClick={handlerDelete}>
        <span className={`material-symbols-rounded ${styles['icon-close']}`}>
          close
        </span>
      </button>
    </div>
  );
};

export default ItemShortcut;

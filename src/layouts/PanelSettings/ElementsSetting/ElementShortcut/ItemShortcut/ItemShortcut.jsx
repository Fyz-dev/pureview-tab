import styles from './ItemShortcut.module.css';

const ItemShortcut = ({ url, urlIcon }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={urlIcon} />
      <span className={styles.text}>{url}</span>
      <button className={styles['button-delete']}>
        <span className={`material-symbols-rounded ${styles['icon-close']}`}>
          close
        </span>
      </button>
    </div>
  );
};

export default ItemShortcut;

import styles from './Background.module.css';

const Background = ({ children }) => {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Background;

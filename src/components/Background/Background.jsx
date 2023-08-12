import styles from './Background.module.css';

const Background = ({ children, imageUrl }) => {
  return (
    <div
      className={styles.backgroundImage}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Background;

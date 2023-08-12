import styles from './Background.module.css';

const Background = ({ children, imageUrl }) => {
  return (
    <div
      className={styles.backgroundImage}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
  );
};

export default Background;

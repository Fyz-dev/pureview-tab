import styles from './Background.module.css';

const Background = ({ children }) => {
  return <div className={styles.backgroundImage}>{children}</div>;
};

export default Background;

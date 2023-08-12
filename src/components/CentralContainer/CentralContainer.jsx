import styles from './CentralContainer.module.css';

const CentralContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CentralContainer;

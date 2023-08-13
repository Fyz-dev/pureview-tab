import styles from './Background.module.css';

const Background = ({ children, imageUrl }) => {
  return (
    <div
      className={styles['background']}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {children}
    </div>
  );
};
export default Background;

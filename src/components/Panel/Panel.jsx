import styles from './Panel.module.css';

const Panel = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.panel} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Panel;

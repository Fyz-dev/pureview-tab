import styles from './PanelDark.module.css';

const PanelDark = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.panel} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default PanelDark;

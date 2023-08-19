import { forwardRef } from 'react';
import styles from './PanelDark.module.css';

const PanelDark = forwardRef(({ children, className, ...rest }, ref) => {
  return (
    <div className={`${styles.panel} ${className}`} ref={ref} {...rest}>
      {children}
    </div>
  );
});

PanelDark.displayName = 'PanelDark';

export default PanelDark;

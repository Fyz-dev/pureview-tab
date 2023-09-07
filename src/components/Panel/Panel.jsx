import { forwardRef } from 'react';
import styles from './Panel.module.css';

const Panel = forwardRef(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} className={`${styles.panel} ${className}`} {...rest}>
      {children}
    </div>
  );
});

Panel.displayName = 'Panel';

export default Panel;

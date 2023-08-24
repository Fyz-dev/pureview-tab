import Button from 'src/components/Button/Button';
import styles from './ButtonSmall.module.css';

const ButtonSmall = ({ children, className, ...rest }) => {
  return (
    <Button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonSmall;

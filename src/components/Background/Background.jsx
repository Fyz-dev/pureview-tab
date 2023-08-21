import styles from './Background.module.css';
import BackgroundObject from '../../utils/BackgroundImage';
import { observer } from 'mobx-react-lite';

const Background = observer(({ children }) => {
  return (
    <div
      className={styles['background']}
      style={{
        backgroundImage: `url(${BackgroundObject.getFullImage()})`,
      }}
    >
      {children}
    </div>
  );
});
export default Background;

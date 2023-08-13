import styles from './Background.module.css';
import backgroundImage from '../../utils/db/BackgroundImage';
import { observer } from 'mobx-react-lite';

const Background = observer(({ children }) => {
  return (
    <div
      className={styles['background']}
      style={{
        backgroundImage: `url(${backgroundImage.getUrlImage()})`,
      }}
    >
      {children}
    </div>
  );
});
export default Background;

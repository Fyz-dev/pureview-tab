import PanelWallpapers from '../PanelWallpapers/PanelWallpapers';
import styles from './PanelMenuRight.module.css';

const PanelMenuRight = ({ onBackgroundChange }) => {
  return (
    <div className={styles['mainPanel']}>
      <PanelWallpapers
        onBackgroundChange={onBackgroundChange}
      ></PanelWallpapers>
    </div>
  );
};

export default PanelMenuRight;

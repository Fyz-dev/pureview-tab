import PanelWallpapers from '../PanelWallpapers/PanelWallpapers';
import styles from './PanelMenuRight.module.css';

const PanelMenuRight = () => {
  return (
    <div className={styles['mainPanel']}>
      <PanelWallpapers></PanelWallpapers>
    </div>
  );
};

export default PanelMenuRight;

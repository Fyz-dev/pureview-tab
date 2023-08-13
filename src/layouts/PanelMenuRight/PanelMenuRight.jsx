import ButtonSettings from './ButtonSettings/ButtonSettings';
import PanelWallpapers from '../PanelWallpapers/PanelWallpapers';
import styles from './PanelMenuRight.module.css';

const PanelMenuRight = ({ onBackgroundChange, openSetting }) => {
  return (
    <div className={styles['mainPanel']}>
      <PanelWallpapers></PanelWallpapers>
      <ButtonSettings openSetting={openSetting}></ButtonSettings>
    </div>
  );
};

export default PanelMenuRight;

import styles from './ButtonSettingWallpaper.module.css';
import Button from '../../../../components/Button/Button';
import { PanelTypeEnum } from '../../../../pages/Home';

const ButtonSettingWallpaper = ({ openPanelType }) => {
  return (
    <Button
      onClick={() => {
        openPanelType(PanelTypeEnum.BACKGROUND);
      }}
    >
      <span className={`material-symbols-rounded ${styles['reload-icon']}`}>
        imagesmode
      </span>
    </Button>
  );
};

export default ButtonSettingWallpaper;

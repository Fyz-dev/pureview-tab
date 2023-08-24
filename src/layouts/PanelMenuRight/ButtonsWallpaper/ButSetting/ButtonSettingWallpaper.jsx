import { PanelTypeEnum } from 'src/pages/Home';
import ButtonSmall from 'src/components/ButtonSmall/ButtonSmall';
import styles from './ButtonSettingWallpaper.module.css';

const ButtonSettingWallpaper = ({ openPanelType }) => {
  return (
    <ButtonSmall
      onClick={() => {
        openPanelType(PanelTypeEnum.BACKGROUND);
      }}
    >
      <span className={`material-symbols-rounded ${styles['reload-icon']}`}>
        imagesmode
      </span>
    </ButtonSmall>
  );
};

export default ButtonSettingWallpaper;

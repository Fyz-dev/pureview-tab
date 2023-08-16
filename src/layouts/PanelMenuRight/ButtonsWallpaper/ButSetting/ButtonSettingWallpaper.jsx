import styles from './ButtonSettingWallpaper.module.css';
import { PanelTypeEnum } from '../../../../pages/Home';
import ButtonSmall from '../../../../components/ButtonSmall/ButtonSmall';

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

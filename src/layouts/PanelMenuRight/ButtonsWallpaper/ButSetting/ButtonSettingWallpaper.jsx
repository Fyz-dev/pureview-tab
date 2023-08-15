import styles from './ButtonSettingWallpaper.module.css';
import Button from '../../../../components/Button/Button';

const ButtonSettingWallpaper = () => {
  return (
    <Button type="button" onClick={async () => {}}>
      <span className={`material-symbols-rounded ${styles['reload-icon']}`}>
        imagesmode
      </span>
    </Button>
  );
};

export default ButtonSettingWallpaper;

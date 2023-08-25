import PrimaryColors from 'src/utils/PrimaryColors';
import styles from './Tag.module.css';
import PanelWallpapers from '../../PanelWallpapers/PanelWallpapers';

const Tag = ({ text }) => {
  return (
    <div
      className={styles['content']}
      style={{ backgroundColor: PrimaryColors.adaptivColorMain }}
      // onClick={PanelWallpapers.searchImageGUI(text)}
    >
      <div
        className={styles['text']}
        style={{ color: PrimaryColors.adaptivColorText }}
      >
        {text}
      </div>
    </div>
  );
};

export default Tag;

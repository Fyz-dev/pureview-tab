import Panel from '../../components/Panel/Panel';
import ButtonRandomWallpaper from './ButtonsWallpaper/ButRandom/ButtonRandomWallpaper';
import ButtonSettings from './ButtonSettings/ButtonSettings';
import styles from './PanelMenuRight.module.css';
import ButtonSettingWallpaper from './ButtonsWallpaper/ButSetting/ButtonSettingWallpaper';

const PanelMenuRight = ({ openSetting }) => {
  return (
    <Panel className={styles['mainPanel']}>
      <ButtonRandomWallpaper></ButtonRandomWallpaper>
      <ButtonSettingWallpaper></ButtonSettingWallpaper>
      <ButtonSettings openSetting={openSetting}></ButtonSettings>
    </Panel>
  );
};

export default PanelMenuRight;

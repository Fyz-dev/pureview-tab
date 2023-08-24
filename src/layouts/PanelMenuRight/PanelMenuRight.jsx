import Panel from 'src/components/Panel/Panel';
import ButtonRandomWallpaper from './ButtonsWallpaper/ButRandom/ButtonRandomWallpaper';
import ButtonSettings from './ButtonSettings/ButtonSettings';
import ButtonSettingWallpaper from './ButtonsWallpaper/ButSetting/ButtonSettingWallpaper';
import styles from './PanelMenuRight.module.css';

const PanelMenuRight = ({ openPanelType }) => {
  return (
    <Panel className={styles['mainPanel']}>
      <ButtonRandomWallpaper></ButtonRandomWallpaper>
      <ButtonSettingWallpaper
        openPanelType={openPanelType}
      ></ButtonSettingWallpaper>
      <ButtonSettings openPanelType={openPanelType}></ButtonSettings>
    </Panel>
  );
};

export default PanelMenuRight;

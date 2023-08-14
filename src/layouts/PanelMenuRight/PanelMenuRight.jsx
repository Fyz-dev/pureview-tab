import Panel from '../../components/Panel/Panel';
import ButtonRandomWallpaper from './ButtonRandomWallpaper/ButtonRandomWallpaper';
import ButtonSettings from './ButtonSettings/ButtonSettings';
import styles from './PanelMenuRight.module.css';

const PanelMenuRight = ({ onBackgroundChange, openSetting }) => {
  return (
    <Panel className={styles['mainPanel']}>
      <ButtonRandomWallpaper></ButtonRandomWallpaper>
      <ButtonSettings openSetting={openSetting}></ButtonSettings>
    </Panel>
  );
};

export default PanelMenuRight;

import PanelDark from '../../components/PanelDark/PanelDark';
import ElementShortcut from './ElementsSetting/ElementShortcut/ElementShortcut';
import GroupSetting from './GroupSetting/GroupSetting';
import styles from './PanelSetting.module.css';

const PanelSetting = () => {
  return (
    <PanelDark className={styles.container}>
      <GroupSetting name="Shortcuts">
        <ElementShortcut></ElementShortcut>
      </GroupSetting>
      <GroupSetting name="Wallpaper"></GroupSetting>
    </PanelDark>
  );
};

export default PanelSetting;

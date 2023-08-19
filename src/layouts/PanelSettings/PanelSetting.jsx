import PanelDark from '../../components/PanelDark/PanelDark';
import useClickOutside from '../../hooks/useClickOutSide';
import { PanelTypeEnum } from '../../pages/Home';
import ElementShortcut from './ElementsSetting/ElementShortcut/ElementShortcut';
import GroupSetting from './GroupSetting/GroupSetting';
import styles from './PanelSetting.module.css';

const PanelSetting = ({ openPanelType }) => {
  const ref = useClickOutside(openPanelType, PanelTypeEnum.NONE);

  return (
    <PanelDark ref={ref} className={styles.container}>
      <div className={styles.content} ref={ref}>
        <GroupSetting name="Shortcuts">
          <ElementShortcut></ElementShortcut>
        </GroupSetting>
        <GroupSetting name="Wallpaper"></GroupSetting>
      </div>
    </PanelDark>
  );
};

export default PanelSetting;

import PanelDark from 'src/components/PanelDark/PanelDark';
import { PanelTypeEnum } from 'src/pages/Home';
import useClickOutside from 'src/hooks/useClickOutside';
import ElementShortcut from './ElementsSetting/ElementShortcut/ElementShortcut';
import GroupSetting from './GroupSetting/GroupSetting';
import styles from './PanelSetting.module.css';

const PanelSetting = ({ closePanelType }) => {
  const ref = useClickOutside(closePanelType, PanelTypeEnum.NONE);

  return (
    <PanelDark ref={ref} className={styles.container}>
      <div className={styles.content}>
        <GroupSetting name="Shortcuts">
          <ElementShortcut></ElementShortcut>
        </GroupSetting>
        <GroupSetting name="Wallpaper"></GroupSetting>
      </div>
    </PanelDark>
  );
};

export default PanelSetting;

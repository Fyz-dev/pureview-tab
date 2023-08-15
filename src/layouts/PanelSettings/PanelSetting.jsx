import PanelDark from '../../components/PanelDark/PanelDark';
import GroupSetting from './GroupSetting/GroupSetting';
import styles from './PanelSetting.module.css';

const PanelSetting = () => {
  return (
    <PanelDark className={styles.container}>
      <GroupSetting name="Clock"></GroupSetting>
      <GroupSetting name="Wallpaper">
        <div style={{ display: 'flex' }}>
          <span style={{ fontSize: '18px' }}>Align:</span>
          <button
            style={{ width: '100%', height: '20px', fontSize: '24px' }}
            type="button"
          ></button>
        </div>
        <div style={{ display: 'flex' }}>
          <span style={{ fontSize: '18px' }}>Align:</span>
          <button
            style={{ width: '100%', height: '20px', fontSize: '24px' }}
            type="button"
          ></button>
        </div>
      </GroupSetting>
    </PanelDark>
  );
};

export default PanelSetting;

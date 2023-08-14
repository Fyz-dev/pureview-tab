import GroupSetting from './GroupSetting/GroupSetting';
import styles from './PanelSetting.module.css';

const PanelSetting = () => {
  return (
    <div className={styles.container}>
      <GroupSetting name="Clock">
        <div style={{ display: 'flex' }}>
          <span>Align:</span>
          <button
            style={{ width: '100%', height: '20px' }}
            type="button"
          ></button>
        </div>
        <div style={{ display: 'flex' }}>
          <span>Align:</span>
          <button
            style={{ width: '100%', height: '20px' }}
            type="button"
          ></button>
        </div>
      </GroupSetting>
      <GroupSetting name="Wallpaper">
        <div style={{ display: 'flex' }}>
          <span>Align:</span>
          <button
            style={{ width: '100%', height: '20px' }}
            type="button"
          ></button>
        </div>
        <div style={{ display: 'flex' }}>
          <span>Align:</span>
          <button
            style={{ width: '100%', height: '20px' }}
            type="button"
          ></button>
        </div>
      </GroupSetting>
    </div>
  );
};

export default PanelSetting;

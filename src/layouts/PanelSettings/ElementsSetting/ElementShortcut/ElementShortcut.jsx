import styles from './ElementShortcut.module.css';
import ItemShortcut from './ItemShortcut/ItemShortcut';
import Shortcuts from '../../../../stores/Shortcuts';
import AddShortcut from './AddShortcut/AddShortcut';
import ToggleSwitch from '../../../../components/ToggleSwitch/ToggleSwitch';
import { useState } from 'react';

const ElementShortcut = () => {
  const [buttonAddVisible, setButtonAddVisible] = useState(true);

  const toggleButtonVisibility = () => {
    setButtonAddVisible(!buttonAddVisible);
  };

  const renderShortcuts = () => {
    return Shortcuts.shortcuts.map((item, index) => (
      <ItemShortcut
        key={index}
        url={item.url}
        urlIcon={item.iconUrl}
      ></ItemShortcut>
    ));
  };

  return (
    <>
      <div className={styles['container-element']}>
        <div className={styles['container-shortcuts']}>
          {renderShortcuts()}
          {buttonAddVisible ? (
            <button
              className={`${styles['button-for-itemAdd']} material-symbols-rounded`}
              onClick={toggleButtonVisibility}
            >
              add
            </button>
          ) : (
            <AddShortcut isHide={setButtonAddVisible}></AddShortcut>
          )}
        </div>
      </div>
      <div className={styles['container-element']}>
        <span className={styles.text}>Visible:</span>
        <ToggleSwitch
          defaultChecked={Shortcuts.visible}
          onChange={() => {
            Shortcuts.visible = !Shortcuts.visible;
          }}
        ></ToggleSwitch>
      </div>
    </>
  );
};

export default ElementShortcut;

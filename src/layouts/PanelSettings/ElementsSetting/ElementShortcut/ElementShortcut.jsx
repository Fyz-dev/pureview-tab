import Shortcuts from 'src/stores/Shortcuts';
import ItemShortcut from './ItemShortcut/ItemShortcut';
import AddShortcut from './AddShortcut/AddShortcut';
import ToggleSwitch from 'src/components/ToggleSwitch/ToggleSwitch';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './ElementShortcut.module.css';

const ElementShortcut = observer(() => {
  const [buttonAddVisible, setButtonAddVisible] = useState(true);

  const toggleButtonVisibility = () => {
    setButtonAddVisible(!buttonAddVisible);
  };

  const renderShortcuts = () => {
    return Shortcuts.shortcuts.map((item) => (
      <ItemShortcut key={item.id} objShortcut={item}></ItemShortcut>
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
});

export default ElementShortcut;

import ToggleSwitch from '../../../../components/ToggleButton/ToggleSwitch';
import Shortcuts from '../../../../stores/Shortcuts';
import styles from './ElementShortcut.module.css';
import ItemShortcut from './ItemShortcut/ItemShortcut';

const ElementShortcut = () => {
  return (
    <>
      <div className={styles['container-element']}>
        <div className={styles['container-shortcuts']}>
          <ItemShortcut
            url="https://chat.openai.com/ettstsseres"
            urlIcon="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chat.openai.com/&size=64"
          ></ItemShortcut>
        </div>
        {/* <span className={styles.text}>Url: </span>
        <input
          type="text"
          placeholder="Enter the url"
          className={styles.input}
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
        ></input>
        <Button
          className={`material-symbols-rounded ${styles.button}`}
          onClick={() => {
            Shortcuts.addShortcut(urlValue);
          }}
        >
          add
        </Button> */}
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

import { observer } from 'mobx-react-lite';
import Shorcut from './Shortcut/Shortcut';
import styles from './PanelShortcut.module.css';
import Panel from 'src/components/Panel/Panel';
import Shortcuts from 'src/stores/Shortcuts';

const PanelShortcut = observer(() => {
  return (
    <Panel className={styles.container}>
      {Shortcuts.shortcuts.map((item, index) => (
        <Shorcut key={index} url={item.url} iconLink={item.iconUrl} />
      ))}
    </Panel>
  );
});

export default PanelShortcut;

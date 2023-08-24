import Shorcut from './Shortcut/Shortcut';
import styles from './PanelShortcut.module.css';
import Panel from '../../components/Panel/Panel';
import Shortcuts from '../../stores/Shortcuts';
import { observer } from 'mobx-react-lite';

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

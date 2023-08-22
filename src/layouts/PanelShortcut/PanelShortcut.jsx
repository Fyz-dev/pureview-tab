import Shorcut from './Shortcut/Shortcut';
import styles from './PanelShortcut.module.css';
import Panel from '../../components/Panel/Panel';
import Shortcuts from '../../stores/Shortcuts';
import { observer } from 'mobx-react-lite';

const PanelShortcut = observer(() => {
  return (
    <Panel className={styles.container}>
      {Shortcuts.shortcuts.map((item) => (
        <Shorcut
          key={item}
          url={item}
          iconLink={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item}&size=64`}
        />
      ))}
      {/* <Shorcut
          url="https://github.com/"
          iconLink="https://github.githubassets.com/favicons/favicon-dark.svg"
        ></Shorcut>
        <Shorcut
          url="https://chat.openai.com/"
          iconLink="https://chat.openai.com/favicon-32x32.png"
        ></Shorcut>
        <Shorcut
          url="https://fonts.google.com/specimen/Work+Sans?preview.text=0000&preview.text_type=custom"
          iconLink="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://fonts.google.com/&size=64"
        ></Shorcut> */}
    </Panel>
  );
});

export default PanelShortcut;

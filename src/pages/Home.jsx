import { useState } from 'react';
import Background from '../components/Background/Background';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import Clock from '../components/Clock/Clock';
import PanelMenuRight from '../layouts/PanelMenuRight/PanelMenuRight';
import PanelSetting from '../layouts/PanelSettings/PanelSetting';
import PanelShortcut from '../layouts/PanelShortcut/PanelShortcut';

const Home = () => {
  const [settingIsOpen, setSettingIsOpen] = useState(false);

  return (
    <Background>
      <CentralContainer>
        <Clock></Clock>
      </CentralContainer>
      <PanelShortcut></PanelShortcut>
      <PanelMenuRight openSetting={setSettingIsOpen}></PanelMenuRight>
      {settingIsOpen ? <PanelSetting></PanelSetting> : ''}
    </Background>
  );
};

export default Home;

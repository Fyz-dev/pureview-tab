import { useState } from 'react';
import Background from '../components/Background/Background';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import Clock from '../components/Clock/Clock';
import PanelMenuRight from '../layouts/PanelMenuRight/PanelMenuRight';
import PanelSetting from '../layouts/PanelSettings/PanelSetting';
import PanelShortcut from '../layouts/PanelShortcut/PanelShortcut';
import PanelWallpapers from '../layouts/PanelWallpapers/PanelWallpapers';

export const PanelTypeEnum = {
  ALLSETTING: 'AllSetting',
  BACKGROUND: 'Background',
  NONE: 'None',
};

const Home = () => {
  const [panelType, setPanelType] = useState(PanelTypeEnum.NONE);

  return (
    <Background>
      <CentralContainer>
        <Clock></Clock>
      </CentralContainer>
      <PanelShortcut></PanelShortcut>
      <PanelMenuRight openPanelType={setPanelType}></PanelMenuRight>
      {panelType === PanelTypeEnum.ALLSETTING && <PanelSetting></PanelSetting>}
      {panelType === PanelTypeEnum.BACKGROUND && (
        <PanelWallpapers></PanelWallpapers>
      )}
    </Background>
  );
};

export default Home;

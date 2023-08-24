import { useState } from 'react';
import Background from '../components/Background/Background';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import Clock from '../components/Clock/Clock';
import PanelMenuRight from '../layouts/PanelMenuRight/PanelMenuRight';
import PanelSetting from '../layouts/PanelSettings/PanelSetting';
import PanelShortcut from '../layouts/PanelShortcut/PanelShortcut';
import { observer } from 'mobx-react-lite';
import Shortcuts from '../stores/Shortcuts';
import { Toaster } from 'react-hot-toast';
import PanelsWallpapers from '../layouts/PanelsWallpapers/PanelsWallpapers';

export const PanelTypeEnum = {
  ALLSETTING: 'AllSetting',
  BACKGROUND: 'Background',
  NONE: 'None',
};

const Home = observer(() => {
  const [panelType, setPanelType] = useState(PanelTypeEnum.NONE);

  const setPanel = (valuePanelType) => {
    if (panelType === valuePanelType) setPanelType(PanelTypeEnum.NONE);
    else setPanelType(valuePanelType);
  };

  return (
    <Background>
      <Toaster position="top-center" reverseOrder={false} />
      <CentralContainer>
        <Clock></Clock>
      </CentralContainer>
      {Shortcuts.visible && <PanelShortcut></PanelShortcut>}
      <PanelMenuRight openPanelType={setPanel}></PanelMenuRight>
      {panelType === PanelTypeEnum.ALLSETTING && (
        <PanelSetting closePanelType={setPanel}></PanelSetting>
      )}
      {panelType === PanelTypeEnum.BACKGROUND && (
        <PanelsWallpapers closePanelType={setPanel}></PanelsWallpapers>
      )}
    </Background>
  );
});

export default Home;

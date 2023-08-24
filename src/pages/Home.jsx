import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Background from 'src/components/Background/Background';
import CentralContainer from 'src/components/CentralContainer/CentralContainer';
import Clock from 'src/components/Clock/Clock';
import PanelMenuRight from 'src/layouts/PanelMenuRight/PanelMenuRight';
import PanelSetting from 'src/layouts/PanelSettings/PanelSetting';
import PanelShortcut from 'src/layouts/PanelShortcut/PanelShortcut';
import Shortcuts from 'src/stores/Shortcuts';
import PanelsWallpapers from 'src/layouts/PanelsWallpapers/PanelsWallpapers';

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

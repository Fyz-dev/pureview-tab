import { useState } from 'react';
import Background from '../components/Background/Background';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import Clock from '../components/Clock/Clock';
import PanelMenuRight from '../layouts/PanelMenuRight/PanelMenuRight';
import PanelSetting from '../layouts/PanelSettings/PanelSetting';
import PanelShortcut from '../layouts/PanelShortcut/PanelShortcut';
import PanelWallpapers from '../layouts/PanelWallpapers/PanelWallpapers';
import PanelAboutWallpaper from '../layouts/PanelAboutWallpaper/PanelAboutWallpaper';
import { observer } from 'mobx-react-lite';
import Shortcuts from '../stores/Shortcuts';
import { Toaster } from 'react-hot-toast';

export const PanelTypeEnum = {
  ALLSETTING: 'AllSetting',
  BACKGROUND: 'Background',
  NONE: 'None',
};

const Home = observer(() => {
  const [panelType, setPanelType] = useState(PanelTypeEnum.NONE);

  const setPanel = (valuePanelType) => {
    if (panelType === PanelTypeEnum.NONE) setPanelType(valuePanelType);
    else setPanelType(PanelTypeEnum.NONE);
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
        <div>
          <PanelWallpapers></PanelWallpapers>
          <PanelAboutWallpaper></PanelAboutWallpaper>
        </div>
      )}
    </Background>
  );
});

export default Home;

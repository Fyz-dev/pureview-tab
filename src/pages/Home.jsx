import Background from '../components/Background/Background';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import Clock from '../components/Clock/Clock';
import PanelShortcut from '../components/PanelShortcut/PanelShortcut';
import PanelWallpapers from '../components/PanelWallpapers/PanelWallpapers';
import { useState } from 'react';

const Home = () => {
  const [backgroundUrl, setbackgroundUrl] = useState(
    'https://images.hdqwalls.com/download/evening-landscape-minimal-4k-kl-3840x2400.jpg',
  );

  return (
    <Background imageUrl={backgroundUrl}>
      <CentralContainer>
        <Clock></Clock>
      </CentralContainer>
      <PanelShortcut></PanelShortcut>
      <PanelWallpapers onBackgroundChange={setbackgroundUrl}></PanelWallpapers>
    </Background>
  );
};

export default Home;

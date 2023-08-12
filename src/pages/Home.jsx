import Background from '../components/Background/Background';
import Clock from '../components/Clock/Clock';
import PanelWallpapers from '../components/PanelWallpapers/PanelWallpapers';
import Shorcut from '../components/Shortcut/Shortcut';
import { useState } from 'react';

const Home = () => {
  const [backgroundUrl, setbackgroundUrl] = useState(
    'https://images.hdqwalls.com/download/evening-landscape-minimal-4k-kl-3840x2400.jpg',
  );

  return (
    <Background imageUrl={backgroundUrl}>
      <Clock></Clock>
      <PanelWallpapers onBackgroundChange={setbackgroundUrl}></PanelWallpapers>
    </Background>
  );
};

export default Home;

import useClickOutside from 'src/hooks/useClickOutside';
import { PanelTypeEnum } from 'src/pages/Home';
import PanelAboutWallpaper from './PanelAboutWallpaper/PanelAboutWallpaper';
import PanelWallpapers from './PanelWallpapers/PanelWallpapers';

const PanelsWallpapers = ({ closePanelType }) => {
  const ref = useClickOutside(closePanelType, PanelTypeEnum.NONE);

  return (
    <div ref={ref}>
      <PanelWallpapers></PanelWallpapers>
      <PanelAboutWallpaper></PanelAboutWallpaper>
    </div>
  );
};

export default PanelsWallpapers;

import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './ButtonRandomWallpaper.module.css';
import Button from '../../../../components/Button/Button';
import loaderImage from '../../../PanelWallpapers/loaderImage';

// https://images.pexels.com/photos/17809448/pexels-photo-17809448.jpeg
// https://images.pexels.com/photos/17542830/pexels-photo-17542830.jpeg
const ButtonRandomWallpaper = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Используем useSpring для управления стилем анимации
  const springProps = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(180deg)' },
    reset: true,
    loop: buttonDisabled,
    config: { duration: 1000 },
  });

  return (
    <Button
      type="button"
      disabled={buttonDisabled}
      onClick={async () => {
        setButtonDisabled(true);
        await loaderImage.loadRandImage();
        setButtonDisabled(false);
      }}
    >
      <animated.span
        className={`material-symbols-rounded ${styles['reload-icon']}`}
        style={springProps}
      >
        autorenew
      </animated.span>
    </Button>
  );
};

export default ButtonRandomWallpaper;

import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import loaderImage from 'src/layouts/PanelsWallpapers/loaderImage';
import ButtonSmall from 'src/components/ButtonSmall/ButtonSmall';
import styles from './ButtonRandomWallpaper.module.css';

// https://images.pexels.com/photos/17809448/pexels-photo-17809448.jpeg
// https://images.pexels.com/photos/17542830/pexels-photo-17542830.jpeg
// https://images.unsplash.com/photo-1596456214405-f1a90099fb5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODkzODJ8MHwxfHNlYXJjaHwxfHxOaWtpdGF8ZW58MHx8fHwxNjkyMjIwODQ2fDA&ixlib=rb-4.0.3&q=85
const ButtonRandomWallpaper = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Используем useSpring для управления стилем анимации
  const springProps = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(180deg)' },
    // reset: true,
    pause: !buttonDisabled,
    loop: buttonDisabled,
    config: { duration: 1000, clamp: true },
  });

  return (
    <ButtonSmall
      type="button"
      disabled={buttonDisabled}
      onClick={async () => {
        setButtonDisabled(true);
        await loaderImage.loadRandImage();
        setTimeout(() => {
          setButtonDisabled(false);
        }, 400);
      }}
    >
      <animated.span
        className={`material-symbols-rounded ${styles['reload-icon']}`}
        style={springProps}
      >
        autorenew
      </animated.span>
    </ButtonSmall>
  );
};

export default ButtonRandomWallpaper;

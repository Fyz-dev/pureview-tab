import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { observer } from 'mobx-react-lite';
import BackgroundObject from 'src/utils/BackgroundImage';
import PrimaryColors from 'src/utils/PrimaryColors';
import styles from './Background.module.css';

const Background = observer(({ children }) => {
  const [currentBackground, setBackground] = useState(0);
  const [lastBackground, setLastBackground] = useState(0);

  useEffect(() => {
    BackgroundObject.getFullImage().then((valueCurrentImage) => {
      if (valueCurrentImage !== null && valueCurrentImage) {
        setLastBackground(currentBackground);
        setBackground(valueCurrentImage);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [BackgroundObject.backgroundObjectJson]);

  const transitions = useTransition(currentBackground, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div className={styles['background-container']}>
      <div
        className={styles['background']}
        style={{
          backgroundColor: `${PrimaryColors.adaptivColorMain}`,
          backgroundImage: `url(${lastBackground})`,
        }}
      />
      {transitions((style, item) => (
        <animated.div
          className={styles['background']}
          style={{
            ...style,
            backgroundImage: `url(${item})`,
          }}
        />
      ))}
      {children}
    </div>
  );
});

export default Background;

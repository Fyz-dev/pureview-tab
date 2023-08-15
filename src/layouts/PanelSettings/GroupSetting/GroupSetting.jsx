import { useState } from 'react';
import styles from './GroupSetting.module.css';
import { useSpring, animated } from 'react-spring';

const GroupSetting = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  //Отвечает за то, отображено ли содержимое GroupSetting
  const [displayChildren, setDisplayChildren] = useState(false);

  const containerAnimation = useSpring({
    transform: isOpen ? 'translateY(0px)' : 'translateY(-100%)',
    reset: true,
    onRest: () => {
      if (displayChildren && !isOpen) setDisplayChildren(false);
    },
  });

  return (
    <div>
      <button
        // Когда children полностью скрыты - меняем
        className={`${styles.button} ${
          displayChildren
            ? styles['button-when-open']
            : styles['button-group-setting-close']
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          setDisplayChildren(true);
        }}
      >
        <span className={styles.text}>{name}</span>
        <span
          className={`material-symbols-rounded ${styles.icon} ${
            isOpen
              ? `${styles['flip-anim']}`
              : `${styles['flip-anim-reverse']} ${styles['icon-anim-opacity']}`
          }`}
        >
          chevron_right
        </span>
      </button>
      {displayChildren && (
        <div className={styles['container-anim']}>
          <animated.div
            style={containerAnimation}
            className={styles['container-child-when-open']}
          >
            <div className={styles['container-children']}>{children}</div>
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default GroupSetting;

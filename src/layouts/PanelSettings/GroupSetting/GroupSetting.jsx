import { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './GroupSetting.module.css';

const GroupSetting = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  //Отвечает за то, отображено ли содержимое GroupSetting
  const [displayChildren, setDisplayChildren] = useState(false);
  const containerRef = useRef(null);

  const containerAnimation = useSpring({
    transform: isOpen
      ? 'translateY(-8px)'
      : `translateY(${
          containerRef.current
            ? -containerRef.current.clientHeight + 'px'
            : '-70px'
        })`,
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
            : styles['button-when-close']
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          !displayChildren && setDisplayChildren(true);
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
            ref={containerRef}
          >
            <div className={styles['container-children']}>{children}</div>
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default GroupSetting;

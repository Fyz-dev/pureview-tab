import { observer } from 'mobx-react-lite';
import Shorcut from './Shortcut/Shortcut';
import styles from './PanelShortcut.module.css';
import Panel from 'src/components/Panel/Panel';
import Shortcuts from 'src/stores/Shortcuts';
import { useRef, useState } from 'react';

// ENUMS
const ScrollDirection = {
  UP: -1,
  DOWN: 1,
};

// ENUMS
const ScrollBorderStatus = {
  NONE: 0,
  TOP: 1,
  DOWN: 2,
};

const PanelShortcut = observer(() => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [isScrollAtBorder, setScrollOnBorder] = useState(
    ScrollBorderStatus.TOP,
  );
  const ref = useRef(null);

  const scroll = (direction) => {
    const targetElement = ref.current;
    const sizeContainer =
      targetElement.clientHeight -
      parseInt(getComputedStyle(targetElement).paddingTop);

    //Проверяем докрутился ли элемент до конца
    if (targetElement.scrollTop % sizeContainer !== 0) return;

    targetElement.scrollTo({
      top: targetElement.scrollTop + sizeContainer * direction,
      behavior: 'smooth',
    });
  };

  //Отключение кнопок для прокрутки
  const disabledScrollButton = () => {
    const targetElement = ref.current;
    const isAtBottom =
      targetElement.scrollTop ===
      targetElement.scrollHeight - targetElement.clientHeight;
    const isAtTop = targetElement.scrollTop === 0;

    if (isAtBottom) setScrollOnBorder(ScrollBorderStatus.DOWN);
    else if (isAtTop) setScrollOnBorder(ScrollBorderStatus.TOP);
    else setScrollOnBorder(ScrollBorderStatus.NONE);
  };

  const handleClick = (direction) => scroll(direction);

  const handleScroll = (e) =>
    scroll(e.deltaY < 0 ? ScrollDirection.UP : ScrollDirection.DOWN);

  const handleMouseEnter = () => {
    const targetElement = ref.current;
    //Проверяем, переполнил ли контейнер
    setButtonVisible(targetElement.clientHeight < targetElement.scrollHeight);

    disabledScrollButton();
  };

  return (
    <div onMouseEnter={handleMouseEnter} className={styles['main-container']}>
      <Panel
        ref={ref}
        onScroll={disabledScrollButton}
        onWheel={handleScroll}
        className={styles.container}
      >
        {Shortcuts.shortcuts.map((item, index) => (
          <Shorcut key={index} url={item.url} iconLink={item.iconUrl} />
        ))}
      </Panel>
      {buttonVisible && (
        <div className={styles['container-button']}>
          <button
            disabled={isScrollAtBorder === ScrollBorderStatus.TOP}
            className={`material-symbols-rounded ${styles['button-scroll']}`}
            onClick={() => handleClick(ScrollDirection.UP)}
          >
            arrow_drop_up
          </button>
          <button
            disabled={isScrollAtBorder === ScrollBorderStatus.DOWN}
            className={`material-symbols-rounded ${styles['button-scroll']}`}
            onClick={() => handleClick(ScrollDirection.DOWN)}
          >
            arrow_drop_down
          </button>
        </div>
      )}
    </div>
  );
});

export default PanelShortcut;

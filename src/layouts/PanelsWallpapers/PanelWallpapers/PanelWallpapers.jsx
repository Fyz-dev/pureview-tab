import { useState } from 'react';
import Panel from 'src/components/Panel/Panel';
import loaderImage from 'src/layouts/PanelsWallpapers/loaderImage';
import styles from './PanelWallpapers.module.css';

const PanelWallpapers = () => {
  const [searchValue, setSearchValue] = useState('');

  // const searchImageGUI = (searchValue) => {
  //   setSearchValue(searchValue);
  //   loaderImage.loadSearchImage(searchValue);
  // };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Panel className={styles.container}>
      <div className={styles['search-panel']}>
        <input
          type="text"
          className={styles['search-bar']}
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          className={`material-symbols-rounded ${styles['button-search']}`}
          onClick={() => {
            loaderImage.loadSearchImage(searchValue);
          }}
        >
          search
        </button>
      </div>
    </Panel>
  );
};

export default PanelWallpapers;

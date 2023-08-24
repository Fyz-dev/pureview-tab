import { useState } from 'react';
import styles from './PanelWallpapers.module.css';
import Panel from '../../../components/Panel/Panel';
import loaderImage from '../loaderImage';

const PanelWallpapers = () => {
  const [searchValue, setSearchValue] = useState('');

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

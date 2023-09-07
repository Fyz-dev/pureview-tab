import { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Panel from 'src/components/Panel/Panel';
import loaderImage from 'src/layouts/PanelsWallpapers/loaderImage';
import styles from './PanelWallpapers.module.css';
import BackgroundImage from 'src/utils/BackgroundImage';
import PrimaryColors from 'src/utils/PrimaryColors';

const PanelWallpapers = () => {
  const [searchValue, setSearchValue] = useState(''); // Поисковый запрос
  const [imageListValue, setImageList] = useState(null); // Массив картинок
  const [searchPageValue, setSearchPage] = useState(1); // Страница результата (списка картинок)

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const listPhotos = () => {
    if (imageListValue == null || imageListValue.length === 0) return null;

    return imageListValue.map((item) => ({
      src: item.urls.small,
      width: item.width,
      height: item.height,
    }));
  };

  const clickSearch = async () => {
    setSearchPage(1);
    console.log('page: ', searchPageValue);
    setImageList(
      await loaderImage.searchImagesOnPage(searchValue, searchPageValue),
    );
  };

  const clickNextPage = async () => {
    setSearchPage(searchPageValue + 1);
    console.log('page: ', searchPageValue);
    setImageList(
      imageListValue.concat(
        await loaderImage.searchImagesOnPage(searchValue, searchPageValue),
      ),
    );
  };

  const selectImage = useCallback(
    (event, { index }) => {
      BackgroundImage.setObjectJson(imageListValue[index]);
    },
    [imageListValue],
  );

  return (
    <Panel className={styles.container}>
      <div className={styles['search-panel']}>
        <input
          type="text"
          className={styles['search-bar']}
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              clickSearch();
            }
          }}
        />
        <button
          className={`material-symbols-rounded ${styles['button-search']}`}
          onClick={clickSearch}
        >
          search
        </button>
      </div>
      <div className={styles['image-list-panel']}>
        {imageListValue && imageListValue.length > 0 ? (
          <Gallery
            photos={listPhotos()}
            direction={'column'}
            columns="4"
            onClick={selectImage}
          />
        ) : (
          <span
            className={styles['image-message']}
            style={{ color: PrimaryColors.colorText }}
          >
            Please try typing something or modifying your search. 😊
          </span>
        )}
      </div>
      {/* <div className={styles['navigation-panel']}>
        <button onClick={clickNextPage}>next</button>
      </div> */}
    </Panel>
  );
};

export default PanelWallpapers;

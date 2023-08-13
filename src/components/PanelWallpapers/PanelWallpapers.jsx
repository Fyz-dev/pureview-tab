import { useRef } from 'react';
import styles from './PanelWallpapers.module.css';
import { createClient } from 'pexels';

const PanelWallpapers = ({ onBackgroundChange }) => {
  async function randomPhotos(client) {
    try {
      const photo = await client.photos.random();
      const urlPhoto = photo['src']['original'];

      return urlPhoto;
    } catch (error) {
      console.error('Ошибка при поиске фотографий:', error);
      return undefined;
    }
  }

  const loadImage = async () => {
    const client = createClient(import.meta.env.VITE_PEXEL_API_TOKEN);
    var loaderImage = new Image();

    // buttonRef.disabled = true;
    const urlImage = await randomPhotos(client);

    if (urlImage !== undefined) {
      loaderImage.src = urlImage;
      loaderImage.onload = function () {
        onBackgroundChange(loaderImage.src);
      };
      // buttonRef.disabled = false;
    }
  };

  return (
    <div className={styles['mainPanel']}>
      <button
        type="button"
        className={styles['mainbutton']}
        onClick={() => {
          loadImage();
        }}
      >
        Let's change
      </button>
    </div>
  );
};

export default PanelWallpapers;

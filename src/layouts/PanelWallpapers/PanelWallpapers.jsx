import { useState } from 'react';
import styles from './PanelWallpapers.module.css';
import { createClient } from 'pexels';
import backgroundImage from '../../utils/db/BackgroundImage';

// https://images.pexels.com/photos/17809448/pexels-photo-17809448.jpeg

const PanelWallpapers = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  async function randomPhotos(client) {
    try {
      const photo = await client.photos.random();
      const urlPhoto = photo['src']['original'];

      return urlPhoto;
    } catch (error) {
      console.error('Error while searching for photos:', error);
      return undefined;
    }
  }

  const loadImage = async () => {
    const client = createClient(import.meta.env.VITE_PEXEL_API_TOKEN);

    setButtonDisabled(true);
    const urlImage = await randomPhotos(client);
    if (urlImage !== undefined) {
      backgroundImage.setUrlImage(urlImage);
      setButtonDisabled(false);
    }
  };

  return (
    <button
      type="button"
      className={styles['mainbutton']}
      disabled={buttonDisabled}
      onClick={() => {
        loadImage();
      }}
    >
      Let's change
    </button>
  );
};

export default PanelWallpapers;

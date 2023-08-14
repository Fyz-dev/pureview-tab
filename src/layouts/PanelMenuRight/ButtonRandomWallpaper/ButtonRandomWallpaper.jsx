import { useState } from 'react';
import { createClient } from 'pexels';
import backgroundImage from '../../../utils/db/BackgroundImage';
import Button from '../../../components/Button/Button';
import styles from './ButtonRandomWallpaper.module.css';

// https://images.pexels.com/photos/17809448/pexels-photo-17809448.jpeg
// https://images.pexels.com/photos/17542830/pexels-photo-17542830.jpeg
const ButtonRandomWallpaper = () => {
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
      await backgroundImage.setUrlImage(urlImage);
      setButtonDisabled(false);
    }
  };

  return (
    <Button
      type="button"
      disabled={buttonDisabled}
      onClick={() => {
        loadImage();
      }}
    >
      <span
        className={`material-symbols-rounded ${styles['reload-icon']} ${
          buttonDisabled
            ? `${styles['rotation-run']}`
            : `${styles['rotation-stop']}`
        }`}
      >
        autorenew
      </span>
    </Button>
  );
};

export default ButtonRandomWallpaper;

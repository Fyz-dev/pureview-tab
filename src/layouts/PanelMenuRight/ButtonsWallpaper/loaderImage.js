import { createApi } from 'unsplash-js';
import backgroundImage from '../../../utils/db/BackgroundImage';

class LoaderImage {
  randomPhotos = async (client) => {
    try {
      const photo = await client.photos.getRandom();
      const urlPhoto = photo['response']['urls']['full'];
      console.log(urlPhoto);

      return urlPhoto;
    } catch (error) {
      console.error('Error while searching for photos:', error);
      return undefined;
    }
  };

  // async function searchPhotos(search, client) {
  //   try {
  //     const photos = await client.photos.search({ search });
  //     const photo = photos[0];
  //     const urlPhoto = photo['src']['original'];

  //     return urlPhoto;
  //   } catch (error) {
  //     console.error('Error while searching for photos:', error);
  //     return undefined;
  //   }
  // }

  loadImage = async () => {
    const client = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_TOKEN,
      fetch: fetch,
    });

    const urlImage = await this.randomPhotos(client);
    // const urlImage = await searchPhotos('Ocean', client);
    if (urlImage !== undefined) {
      await backgroundImage.setUrlImage(urlImage);
    }
  };
}

export default new LoaderImage();

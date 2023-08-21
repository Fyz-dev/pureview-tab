import { createApi } from 'unsplash-js';
import BackgroundObject from '../../utils/BackgroundImage';

class LoaderImage {
  randomPhotos = async (client) => {
    try {
      const photo = await client.photos.getRandom();
      // const urlPhoto = photo['urls']['full'];

      return photo['response'];
    } catch (error) {
      console.error('Error while searching for photos:', error);
      return undefined;
    }
  };

  searchPhotos = async (search, client) => {
    try {
      const photos = await client.search.getPhotos({ query: search });
      const photo = photos['response']['results'][0];
      // const urlPhoto = photo['urls']['full'];

      return photo;
    } catch (error) {
      console.error('Error while searching for photos:', error);
      return undefined;
    }
  };

  // -------------------------
  // Ф-ции для экспортирования
  // -------------------------

  loadRandImage = async () => {
    const client = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_TOKEN,
      fetch: fetch,
    });

    const urlImage = await this.randomPhotos(client);
    if (urlImage !== undefined) {
      console.log(2);
      BackgroundObject.setObjectJson(urlImage);
    }
  };

  loadSearchImage = async (searchText) => {
    const client = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_TOKEN,
      fetch: fetch,
    });

    const urlImage = await this.searchPhotos(searchText, client);
    if (urlImage !== undefined) {
      BackgroundObject.setObjectJson(urlImage);
    }
  };
}

export default new LoaderImage();

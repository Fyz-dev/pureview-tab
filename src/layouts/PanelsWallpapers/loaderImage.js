import { createApi } from 'unsplash-js';
import BackgroundObject from '../../utils/BackgroundImage';
import loaderImageHandler from './loaderImageHandler';

class LoaderImage {
  // -------------------------
  // Ф-ции для экспортирования
  // -------------------------

  loadRandImage = async () => {
    const client = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_TOKEN,
      fetch: fetch,
    });

    const urlImage = await loaderImageHandler.randomPhotos(client);
    if (urlImage !== undefined) {
      BackgroundObject.setObjectJson(urlImage);
    }
  };

  loadSearchImage = async (searchText) => {
    const client = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_TOKEN,
      fetch: fetch,
    });

    const urlImage = await loaderImageHandler.searchPhotos(searchText, client);
    if (urlImage !== undefined) {
      BackgroundObject.setObjectJson(urlImage);
    }
  };
}

export default new LoaderImage();

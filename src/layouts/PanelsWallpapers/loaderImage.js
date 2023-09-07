import { createApi } from 'unsplash-js';
import BackgroundObject from 'src/utils/BackgroundImage';
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

    const urlImage = await loaderImageHandler.searchFirstPhoto(
      searchText,
      client,
    );
    if (urlImage !== undefined) {
      BackgroundObject.setObjectJson(urlImage);
    }
  };

  searchImages = async (searchText) => {
    const client = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_TOKEN,
      fetch: fetch,
    });

    return await loaderImageHandler.searchPhotos(searchText, 1, client);
  };

  searchImagesOnPage = async (searchText, pageNumber) => {
    const client = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_TOKEN,
      fetch: fetch,
    });

    return await loaderImageHandler.searchPhotos(
      searchText,
      pageNumber,
      client,
    );
  };
}

export default new LoaderImage();

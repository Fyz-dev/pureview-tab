import Messages from '../../components/ModalMessages/Messages';

class LoaderImageHandler {
  randomPhotos = async (client) => {
    try {
      const photo = await client.photos.getRandom();
      // const urlPhoto = photo['urls']['full'];

      return photo['response'];
    } catch (error) {
      Messages.ErrorMessage('Too many requests, can you wait a bit?!');
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
      Messages.ErrorMessage('Too many requests, can you wait a bit?!');
      return undefined;
    }
  };
}

export default new LoaderImageHandler();

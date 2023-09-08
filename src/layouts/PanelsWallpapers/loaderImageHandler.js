import Messages from 'src/components/ModalMessages/Messages';

class LoaderImageHandler {
  handleMessError = (error) => {
    if (error instanceof TypeError) {
      return Messages.ErrorMessage("My apologies, I'm sorry 😔");
    }

    return Messages.ErrorMessage('Too many requests, can you wait a bit?!');
  };

  randomPhotos = async (client) => {
    try {
      const photo = await client.photos.getRandom();
      // const urlPhoto = photo['urls']['full'];

      return photo['response'];
    } catch (error) {
      console.log('errorPhoto', error);
      this.handleMessError(error);
      return undefined;
    }
  };

  searchFirstPhoto = async (search, client) => {
    try {
      const photos = await client.search.getPhotos({ query: search });

      const photo = photos['response']['results'][0];
      // const urlPhoto = photo['urls']['full'];

      return photo;
    } catch (error) {
      console.log('errorPhoto', error);
      this.handleMessError(error);
      return undefined;
    }
  };

  searchPhotos = async (search, page, client) => {
    try {
      const photos = await client.search.getPhotos({
        query: search,
        perPage: 28,
        page: page,
      });

      console.log('p', photos);

      const photo = photos['response'];
      // const urlPhoto = photo['urls']['full'];

      return photo;
    } catch (error) {
      console.log('errorPhoto', error);
      this.handleMessError(error);
      return undefined;
    }
  };
}

export default new LoaderImageHandler();

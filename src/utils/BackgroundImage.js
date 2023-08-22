import { makeAutoObservable, runInAction } from 'mobx';
import { getSelectedImage, updateSelectedImage } from './db/ImagesStorage.js';

const backgroundUrlDef =
  'https://images.hdqwalls.com/download/evening-landscape-minimal-4k-kl-3840x2400.jpg';

class BackgroundObject {
  backgroundObjectJson = { urls: { full: null } };

  constructor() {
    makeAutoObservable(this);
    this.loadBackgroundFromBD();
  }

  loadBackgroundFromBD = async () => {
    try {
      const result = await getSelectedImage();

      runInAction(() => {
        if (result === null) {
          this.backgroundObjectJson = { urls: { full: backgroundUrlDef } };
        } else {
          this.backgroundObjectJson = result;
        }
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // ----------------------------------
  // -------- Export functions --------
  // ----------------------------------

  setObjectJson(value) {
    this.backgroundObjectJson = value;
    updateSelectedImage(value);
  }

  async getFullImage() {
    return new Promise((resolve, reject) => {
      // console.log(toJS(this.backgroundObjectJson));

      let img = new Image();

      img.onload = () => {
        resolve(img.src);
      };

      img.onerror = (error) => {
        reject(error);
      };

      img.src = this.backgroundObjectJson.urls.full;
    });
  }

  // setImage(imageJson) {
  //   updateSelectedImage(imageJson);
  //   console.log(imageJson);
  //   const imageUrl = imageJson['urls']['full'];

  //   // Проверка если не удалось загрузить картинку + предзагрузка
  //   let img = new Image();

  //   img.onload = () => {
  //     this.backgroundUrl = img.src;
  //   };

  //   img.onerror = () => {
  //     this.backgroundUrl = this.backgroundUrlDef;
  //   };

  //   img.onabort = () => {
  //     this.backgroundUrl = this.backgroundUrlDef;
  //   };

  //   img.src = imageUrl;
  // }

  // getUrlImage() {
  //   try {
  //     return this.backgroundUrl;
  //   } catch (error) {
  //     console.log('Not found save Background image.');
  //   }
  // }

  // loadUrlImageFromStorage() {
  //   // Проверка если нету сохранённой картинки в DB или произошла ошибка при считывании
  //   getSelectedImage().then((imageJson) => {
  //     if (imageJson === null) throw 'Not found save Background image.';
  //     this.backgroundUrl = imageJson['urls']['full'];
  //   });
  //   // updateSelectedImage(this.backgroundUrlDef);
  //   // return this.backgroundUrlDef;
  // }
}

export default new BackgroundObject();

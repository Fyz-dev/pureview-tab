import {
  makeAutoObservable,
  observable,
  runInAction,
  action,
  toJS,
} from 'mobx';
import { getSelectedImage, updateSelectedImage } from './db/ImagesStorage.js';

const backgroundUrlDef =
  'https://images.hdqwalls.com/download/evening-landscape-minimal-4k-kl-3840x2400.jpg';

class BackgroundObject {
  backgroundObjectJson = null;

  constructor() {
    // this.loadUrlImageFromStorage();

    makeAutoObservable(this);

    this.updateBackground();
    // getSelectedImage().then(
    //   runInAction((result) => {
    //     if (result === null) {
    //       this.backgroundObjectJson = { urls: { full: backgroundUrlDef } };
    //     } else this.backgroundObjectJson = result;

    //     console.log(123, backgroundUrlDef);
    //   }),
    // );

    // setInterval(() => {
    //   console.log(toJS(this.backgroundObjectJson));
    // }, 1000);
  }

  updateBackground = async () => {
    try {
      const result = await getSelectedImage();

      // runInAction(() => {
      if (result === null) {
        console.log(123, backgroundUrlDef);
        // this.backgroundObjectJson = { urls: { full: backgroundUrlDef } };
        runInAction(() => {
          this.changeBackgroundObject(backgroundUrlDef);
        });
      } else {
        console.log(423, backgroundUrlDef);
        // this.backgroundObjectJson = result;
        runInAction(() => {
          this.changeBackgroundObject(result);
        });
      }
      // });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  changeBackgroundObject(objectJson) {
    this.backgroundObjectJson = objectJson;
  }

  // updateBackground = async () => {
  //   await setInterval(() => {
  //     runInAction(() => {
  //       console.log(123);
  //       this.backgroundObjectJson = { urls: { full: backgroundUrlDef } };
  //     });
  //   }, 1000);
  // };

  setObjectJson(value) {
    this.backgroundObjectJson = value;
    updateSelectedImage(value);
  }

  getFullImage() {
    // if (
    //   this.backgroundObjectJson !== null &&
    //   !(this.backgroundObjectJson instanceof Promise)
    // ) {
    //   return this.backgroundObjectJson.urls.full;
    // } else return this.backgroundUrlDef;
    console.log(toJS(this.backgroundObjectJson));
    return this.backgroundObjectJson.urls.full;
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

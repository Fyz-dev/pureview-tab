import { makeAutoObservable } from 'mobx';
import StorageKeys from './StorageKeys.js';

class BackgroundImage {
  backgroundUrlDef =
    'https://images.hdqwalls.com/download/evening-landscape-minimal-4k-kl-3840x2400.jpg';
  backgroundUrl = this.loadUrtFromStorage();

  constructor() {
    makeAutoObservable(this);
  }

  setUrlImage(imageUrl) {
    // Проверка если не удалось загрузить картинку + предзагрузка
    let img = new Image();

    img.onload = () => {
      this.backgroundUrl = img.src;
      localStorage.setItem(StorageKeys.keyBackgroundUrl, img.src);
    };

    img.onerror = () => {
      this.backgroundUrl = this.backgroundUrlDef;
      localStorage.setItem(StorageKeys.keyBackgroundUrl, this.backgroundUrlDef);
    };

    img.onabort = () => {
      this.backgroundUrl = this.backgroundUrlDef;
      localStorage.setItem(StorageKeys.keyBackgroundUrl, this.backgroundUrlDef);
    };

    img.src = imageUrl;
  }

  getUrlImage() {
    return this.backgroundUrl;
  }

  loadUrtFromStorage() {
    // Проверка если нету сохранённой картинки в localStorage или произошла ошибка при считывании
    try {
      const imageUrl = localStorage.getItem(StorageKeys.keyBackgroundUrl);
      if (imageUrl === null) throw 'error';
      else return imageUrl;
    } catch (error) {
      console.log('Not found save Background image.');
      return this.backgroundUrlDef;
    }
  }
}

export default new BackgroundImage();

import { makeAutoObservable, runInAction, toJS } from 'mobx';
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

  getSmallImage() {
    // console.log(toJS(this.backgroundObjectJson));
    try {
      return this.backgroundObjectJson.urls.thumb;
    } catch (error) {
      return undefined;
    }
  }

  //
  // About Image...

  getImageDescription() {
    try {
      return this.backgroundObjectJson.description;
    } catch (error) {
      return undefined;
    }
  }

  getImageLocation() {
    try {
      return this.backgroundObjectJson.location.name;
    } catch (error) {
      return undefined;
    }
  }

  getImageAuthor() {
    try {
      return this.backgroundObjectJson.user.name;
    } catch (error) {
      return undefined;
    }
  }

  getImageAuthorLink() {
    try {
      return this.backgroundObjectJson.user.links.html;
    } catch (error) {
      return undefined;
    }
  }

  getImageTags() {
    try {
      return this.backgroundObjectJson.tags;
    } catch (error) {
      return undefined;
    }
  }
}

export default new BackgroundObject();

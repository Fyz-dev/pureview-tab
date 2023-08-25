import { readableColor } from 'polished';
import BackgroundImage from './BackgroundImage';

class PrimaryColors {
  // ----------------------------------
  // ------------- All Colors -----------
  // ----------------------------------

  get adaptivColorMain() {
    return BackgroundImage.backgroundObjectJson.color;
  }

  get adaptivColorText() {
    return readableColor(BackgroundImage.backgroundObjectJson.color);
  }

  get colorText() {
    return '#FFF';
  }
}

export default new PrimaryColors();

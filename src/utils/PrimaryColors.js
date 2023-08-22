import { readableColor } from 'polished';
import BackgroundImage from './BackgroundImage';

class PrimaryColors {
  // ----------------------------------
  // -------- Export functions --------
  // ----------------------------------

  getColor() {
    return BackgroundImage.backgroundObjectJson.color;
  }

  getColorText() {
    return readableColor(BackgroundImage.backgroundObjectJson.color);
  }
}

export default new PrimaryColors();

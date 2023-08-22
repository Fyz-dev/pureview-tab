import { toast } from 'react-hot-toast';
import PrimaryColors from '../../utils/PrimaryColors';

class Messages {
  static ErrorMessage(text) {
    toast.error(text, {
      style: {
        backgroundColor: PrimaryColors.getColor(),
        color: PrimaryColors.getColorText(),
        font: '1.2em monospace',
        boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, 0.3)',
      },
      // iconTheme: {
      //   primary: '#713200',
      //   secondary: '#FFFAEE',
      // },
    });
  }
}

export default Messages;

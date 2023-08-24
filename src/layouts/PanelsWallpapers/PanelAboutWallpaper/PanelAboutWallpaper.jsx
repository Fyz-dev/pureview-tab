import { observer } from 'mobx-react-lite';
import Panel from '../../../components/Panel/Panel';
import BackgroundImage from '../../../utils/BackgroundImage';
import styles from './PanelAboutWallpaper.module.css';
import PrimaryColors from '../../../utils/PrimaryColors';
import Messages from '../../../components/ModalMessages/Messages';

const PanelAboutWallpaper = observer(() => {
  const colorText = PrimaryColors.getColorText();

  const openAuthorLink = () => {
    Messages.SuccessMessage("Opening the author's page!");
    window.location.href = BackgroundImage.getImageAuthorLink();
  };

  const openAuthorLinkNewTab = (e) => {
    if (e.button === 1) {
      Messages.SuccessMessage("Opening the author's page in a new tab!");
      e.preventDefault();
      window.open(BackgroundImage.getImageAuthorLink());
    }
  };

  const openLocationLink = () => {
    Messages.SuccessMessage(
      `Opening Google maps about "${BackgroundImage.getImageLocation()}"`,
    );
    window.location.href = `https://www.google.com/maps/search/${encodeURIComponent(
      BackgroundImage.getImageLocation(),
    )}`;
  };

  const openLocationLinkNewTab = (e) => {
    if (e.button === 1) {
      Messages.SuccessMessage(
        `Opening Google maps in a new tab about "${BackgroundImage.getImageLocation()}"`,
      );
      e.preventDefault();
      window.open(
        `https://www.google.com/maps/search/${encodeURIComponent(
          BackgroundImage.getImageLocation(),
        )}`,
      );
    }
  };

  return (
    <Panel className={styles['container']}>
      <div className={styles['content-image']}>
        <img
          className={styles['small-image']}
          src={BackgroundImage.getSmallImage()}
        />
      </div>
      <div className={styles['content-body']}>
        <div
          className={styles['description-text']}
          style={{ color: `${colorText}` }}
        >
          {BackgroundImage.getImageDescription()}
        </div>
        <div
          className={styles['location-text']}
          style={{ color: `${colorText}` }}
          onClick={openLocationLink}
          onAuxClick={(e) => {
            openLocationLinkNewTab(e);
          }}
        >
          <span className={`material-symbols-rounded ${styles['body-icons']}`}>
            location_on
          </span>
          {BackgroundImage.getImageLocation()}
        </div>
        <div
          className={styles['author-text']}
          style={{ color: `${colorText}` }}
          onClick={openAuthorLink}
          onAuxClick={(e) => {
            openAuthorLinkNewTab(e);
          }}
        >
          <span className={`material-symbols-rounded ${styles['body-icons']}`}>
            person_3
          </span>
          {BackgroundImage.getImageAuthor()}
        </div>
      </div>
    </Panel>
  );
});

export default PanelAboutWallpaper;

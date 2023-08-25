import { observer } from 'mobx-react-lite';
import Panel from 'src/components/Panel/Panel';
import BackgroundImage from 'src/utils/BackgroundImage';
import PrimaryColors from 'src/utils/PrimaryColors';
import Messages from 'src/components/ModalMessages/Messages';
import styles from './PanelAboutWallpaper.module.css';
import Tag from './Tag/Tag';

const PanelAboutWallpaper = observer(() => {
  const fullTrim = (str) => {
    return str !== null ? str.trim() : '';
  };

  const adaptivColorText = PrimaryColors.adaptivColorText;
  const colorText = PrimaryColors.colorText;

  const description = fullTrim(BackgroundImage.getImageDescription());
  const location = fullTrim(BackgroundImage.getImageLocation());
  const author = fullTrim(BackgroundImage.getImageAuthor());
  const authorLink = BackgroundImage.getImageAuthorLink();
  const tagList = BackgroundImage.getImageTags();

  const openAuthorLink = () => {
    Messages.SuccessMessage("Opening the author's page!");
    window.location.href = authorLink;
  };

  const openAuthorLinkNewTab = (e) => {
    if (e.button === 1) {
      Messages.SuccessMessage("Opening the author's page in a new tab!");
      e.preventDefault();
      window.open(authorLink);
    }
  };

  const openLocationLink = () => {
    Messages.SuccessMessage(`Opening Google Maps about "${location}"`);
    window.location.href = `https://www.google.com/maps/search/${encodeURIComponent(
      location,
    )}`;
  };

  const openLocationLinkNewTab = (e) => {
    if (e.button === 1) {
      Messages.SuccessMessage(
        `Opening Google Maps in a new tab about "${location}"`,
      );
      e.preventDefault();
      window.open(
        `https://www.google.com/maps/search/${encodeURIComponent(location)}`,
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
          style={{ color: colorText }}
        >
          <span>{description}</span>
        </div>
        <div
          className={styles['location-text']}
          style={{ color: colorText }}
          onClick={openLocationLink}
          onAuxClick={(e) => {
            openLocationLinkNewTab(e);
          }}
        >
          {location.length > 0 && (
            <span
              className={`material-symbols-rounded ${styles['body-icons']}`}
            >
              location_on
            </span>
          )}
          <span>{location}</span>
        </div>
        <div
          className={styles['author-text']}
          style={{ color: colorText }}
          onClick={openAuthorLink}
          onAuxClick={(e) => {
            openAuthorLinkNewTab(e);
          }}
        >
          {author.length > 0 && (
            <span
              className={`material-symbols-rounded ${styles['body-icons']}`}
            >
              person_3
            </span>
          )}
          <span>{author}</span>
        </div>
        <div className={styles['tag-list']}>
          {tagList.map((item, index) => (
            <Tag key={index} text={item.title}></Tag>
          ))}
        </div>
      </div>
    </Panel>
  );
});

export default PanelAboutWallpaper;

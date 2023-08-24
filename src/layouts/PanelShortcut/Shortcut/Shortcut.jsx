import Button from 'src/components/Button/Button';
import Messages from 'src/components/ModalMessages/Messages';
import styles from './Shorcut.module.css';

const Shorcut = ({ url, iconLink }) => {
  // const [iconLink, setIconLink] = useState();

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://fonts.google.com/specimen/Work+Sans?preview.text=0000&preview.text_type=custom',
  //       {},
  //     )
  //     .then(response => {
  //       const data = load(response.data);
  //       const iconLink = data('link[rel="icon"]').attr('href');
  //       setIconLink(iconLink);
  //     });
  // });

  return (
    <Button
      className={styles.container}
      onClick={() => {
        Messages.SuccessMessage('Opening link!');
        window.location.href = url;
      }}
      onAuxClick={(e) => {
        if (e.button === 1) {
          // Проверка, что была нажата средняя кнопка мыши
          Messages.SuccessMessage('Opening link in a new tab!');
          e.preventDefault(); // Отменяем стандартное действие
          window.open(url); // Открываем ссылку в новой вкладке
        }
      }}
    >
      <img className={styles.icon} src={iconLink}></img>
    </Button>
  );
};

export default Shorcut;

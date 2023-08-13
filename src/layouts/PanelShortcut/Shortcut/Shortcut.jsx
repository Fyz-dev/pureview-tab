import axios from 'axios';
import { load } from 'cheerio';
import { useEffect, useState } from 'react';
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
    <button
      className={styles.container}
      onClick={() => {
        window.location.href = url;
      }}
    >
      <img className={styles.icon} src={iconLink}></img>
    </button>
  );
};

export default Shorcut;

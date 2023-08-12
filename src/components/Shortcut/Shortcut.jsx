import axios from 'axios';
import { load } from 'cheerio';
import { useEffect } from 'react';

const Shorcut = () => {
  useEffect(() => {
    axios.get('https://translate.google.com/').then(response => {
      const data = load(response.data);
      const iconLink = data('link[rel="icon"]').attr('href');
      console.log(iconLink);
    });
  });

  return (
    <div>
      <img></img>
    </div>
  );
};

export default Shorcut;

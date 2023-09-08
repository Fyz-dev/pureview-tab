import { isUrl } from './validations';

const getIconSite = (url) => {
  if (isUrl(url))
    return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`;
  return null;
};

export default getIconSite;

const isUrl = (url) => {
  try {
    if (new URL(url).origin === 'null') return false;
    return true;
  } catch (error) {
    return false;
  }
};

export default isUrl;

/**
 * Find the YouTube ID
 * @param {string} url - URL from YouTube
 * @returns {string} - YouTube ID
 */
const getYouTubeId = (url: string): string => {
  let res: string[];

  // look for https://youtu.be/rKlIm5245v0
  if (url.includes('youtu.be')) {
    res = url.split('.be/');
  }
  // look for https://www.youtube.com/watch?v=rKlIm5245v0
  if (url.includes('youtube.com')) {
    res = url.split('watch?v=');
  }

  // check to see if there's a query parameter within the url,
  // like ?t=20
  if (res[1] && res[1].includes('?')) {
    const removeQuery = res[1].split('?');
    // eslint-disable-next-line prefer-destructuring
    return removeQuery[0];
  }
  return res[1];
};

export { getYouTubeId };

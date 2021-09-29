const getYouTubeId = (url) => {
  // look for https://youtu.be/rKlIm5245v0
  if (url.includes('youtu.be')) {
    const res = url.split('.be/');
    return res[1];
  }
  // look for https://www.youtube.com/watch?v=rKlIm5245v0
  if (url.includes('youtube.com')) {
    const res = url.split('watch?v=');
    return res[1];
  }

  return url;
};

export { getYouTubeId };

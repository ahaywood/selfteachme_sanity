import { getYouTubeId } from '../youtube';

describe('Finds the YouTube ID', () => {
  test('youtu.be', () => {
    const result = getYouTubeId('https://youtu.be/rKlIm5245v0');
    expect(result).toBe('rKlIm5245v0');
  });

  test('youtube.com', () => {
    const result = getYouTubeId('https://www.youtube.com/watch?v=rKlIm5245v0');
    expect(result).toBe('rKlIm5245v0');
  });

  test('with a time code', () => {
    const result = getYouTubeId('https://youtu.be/jQXPXzexexo?t=2');
    expect(result).toBe('jQXPXzexexo');
  });
});

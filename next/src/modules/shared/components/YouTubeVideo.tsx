import { useEffect, useState } from 'react';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  videoId: string;
}

type VideoT = {
  height: number;
  width: number;
};

type AspectRatioT = {
  paddingTop: string;
};

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const YouTubeVideo = ({ videoId }: Props): JSX.Element => {
  const [video, setVideo] = useState<VideoT>();
  const [aspectRatio, setAspectRatio] = useState<AspectRatioT>();

  /* get width and height of the video
   * https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=gwskGoK9qJw&format=json
   */
  useEffect(() => {
    const url = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideo(data));
  }, [videoId]);

  useEffect(() => {
    if (video) {
      setAspectRatio({
        paddingTop: `${(video.height / video.width) * 100}%`,
      });
    }
  }, [video]);

  return (
    <div style={aspectRatio} className="w-full h-0 relative">
      <iframe
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="youtube"
        allowFullScreen
      />
    </div>
  );
};

export { YouTubeVideo };

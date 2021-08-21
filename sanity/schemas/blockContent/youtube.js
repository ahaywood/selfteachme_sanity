// youtube.js
// Reference: https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { ImYoutube as icon } from "react-icons/im";

const Preview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);
  return <YouTube videoId={id} />;
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  icon,
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube Video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};

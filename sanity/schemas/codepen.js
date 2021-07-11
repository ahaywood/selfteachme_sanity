import React from "react";
import { FaCodepen as icon } from "react-icons/fa";

const CodePenPreview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <div>Add a CodePen URL</div>;
  }
  const splitURL = url.split("/");
  // [ 'https:', '', 'codepen.io', 'ahaywood', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=dark&default-tab=result`;
  return (
    <iframe
      height="370"
      style={{ width: "100%" }}
      scrolling="no"
      title="CodePen Embed"
      src={embedUrl}
      frameBorder="no"
      allowtransparency="true"
      allowFullScreen
    />
  );
};

export default {
  name: "codepen",
  type: "object",
  title: "CodePen Embed",
  icon,
  preview: {
    select: {
      url: "url",
    },
    component: CodePenPreview,
  },
  fields: [
    {
      name: "url",
      type: "url",
      title: "CodePen URL",
    },
  ],
};

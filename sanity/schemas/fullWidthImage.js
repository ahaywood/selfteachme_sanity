import React from "react";
import { FaRegImage as icon } from "react-icons/fa";

const FullWidthImagePreview = ({ value }) => {
  console.log(value);
  const { imageUrl } = value;
  return (
    <img src={imageUrl} alt="" style={{ width: "100%" }} />
    // {JSON.stringify(image)}
  );
};

export default {
  name: "fullWidthImage",
  title: "Full Width Image",
  type: "image",
  icon,
  fields: [{ name: "alt", type: "string" }],
  preview: {
    select: {
      imageUrl: "fullWidthImage.asset",
    },
    component: FullWidthImagePreview,
  },
};

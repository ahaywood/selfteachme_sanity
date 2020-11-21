import React from "react";
import { MdCheckBoxOutlineBlank as icon } from "react-icons/md";

const Box = ({ value }) => {
  const { heading, emoji, content } = value;
  return (
    <div style={{ display: "flex", padding: "60px 20px 30px 20px" }}>
      {emoji && (
        <div style={{ marginRight: "20px", fontSize: "42px" }}>{emoji}</div>
      )}
      <div style={{ flex: "1" }}>
        {heading && (
          <h3 style={{ paddingTop: "0", marginTop: "0" }}>{heading}</h3>
        )}
        {content}
      </div>
    </div>
  );
};

export default {
  name: "box",
  type: "object",
  title: "Box",
  icon,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "emoji",
      title: "Emoji",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      heading: "heading",
      emoji: "emoji",
      content: "content",
    },
    component: Box,
  },
};

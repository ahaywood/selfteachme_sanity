import React from "react";
import { FiBox } from "react-icons/fi";

const Box = ({ value }) => {
  const { heading, emoji, content } = value;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}><FiBox /></div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Box</h2>
      </div>
      <div style={{ display: "flex", padding: "30px 20px" }}>
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
    </div >
  );
};

export default {
  name: "box",
  type: "object",
  title: "Box",
  icon: FiBox,
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

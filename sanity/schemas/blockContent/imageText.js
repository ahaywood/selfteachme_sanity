import React from "react";
import { RiLayoutMasonryLine } from "react-icons/ri";

const imageTextPreview = ({ value }) => {
  const { image, content, placement } = value;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}><RiLayoutMasonryLine /></div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Image and Text</h2>
      </div>
      <div style={{ display: "flex", flexDirection: placement === 'imageLeft' ? "row" : "row-reverse" }}>
        <div style={{ flex: "1" }}>{image && (<img src={image} style={{ maxWidth: "100%" }} />)}</div>
        <div style={{ padding: "30px", flex: "1" }}>{content}</div>
      </div>
    </div>
  )
}

export default {
  name: "imageText",
  title: "Image and Text",
  type: "object",
  icon: RiLayoutMasonryLine,
  fields: [
    { name: "image", title: "Image", type: "image" },
    { name: "alt", title: "Alt", type: "string" },
    { name: "caption", title: "Caption", type: "string" },
    { name: "content", title: "Content", type: "blockContent" },
    {
      name: "placement", title: "Placement", type: "string", options: {
        list: [
          { title: 'Image Left', value: 'imageLeft' },
          { title: 'Image Right', value: 'imageRight' },
        ],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      image: "image.asset.url",
      content: "content",
      placement: "placement"
    },
    component: imageTextPreview,
  }
}
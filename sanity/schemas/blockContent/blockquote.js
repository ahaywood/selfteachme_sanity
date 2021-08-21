import React from "react";
import { GrBlockQuote } from "react-icons/gr";

const blockquotePreview = ({ value }) => {
  const { quote, cite } = value;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}><GrBlockQuote /></div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Blockquote</h2>
      </div>
      <blockquote style={{ paddingLeft: "10px", marginLeft: "0", fontSize: "20px", fontWeight: "bold", fontStyle: "italic" }}>
        {quote}
      </blockquote>
      <cite>{cite}</cite>
    </div>
  )
}

export default {
  name: "blockquote",
  title: "Blockquote",
  type: "object",
  icon: "GrBlockQuote",
  fields: [
    { name: "quote", title: "Quote", type: "text" },
    { name: "cite", title: "Cite", type: "string" }
  ],
  preview: {
    select: {
      quote: "quote",
      cite: "cite"
    },
    component: blockquotePreview,
  }
}
import React from "react";
import { RiLayoutColumnLine as icon } from "react-icons/ri";

const TwoColumnTextPreview = ({ value }) => {
  const { firstColumn, secondColumn } = value;
  return (
    <div style={{ display: "flex", padding: "60px 20px 20px 20px" }}>
      <div style={{ flex: "1", marginRight: "10px" }}>{firstColumn}</div>
      <div style={{ flex: "1", marginLeft: "10px" }}>{secondColumn}</div>
    </div>
  );
};

export default {
  // computer name
  name: "twoColumnText",
  // visible title
  title: "Two Column Text",
  type: "object",
  icon,
  fields: [
    {
      name: "firstColumn",
      title: "First Column",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "secondColumn",
      title: "Second Column",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      firstColumn: "firstColumn",
      secondColumn: "secondColumn",
    },
    component: TwoColumnTextPreview,
  },
};

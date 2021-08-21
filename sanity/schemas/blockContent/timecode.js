import React from "react";
import { RiTimerFlashLine as icon } from "react-icons/ri";

const TimeCodePreview = ({ value }) => {
  const { timecode } = value;
  return (
    <p style={{ paddingLeft: "20px" }}>
      <strong>{timecode}</strong>
    </p>
  );
};

export default {
  // computer name
  name: "timecode",
  // visible title
  title: "Time Code",
  type: "object",
  icon,
  fields: [
    {
      name: "timecode",
      title: "Timecode",
      type: "string",
    },
  ],
  preview: {
    select: {
      timecode: "timecode",
    },
    component: TimeCodePreview,
  },
};

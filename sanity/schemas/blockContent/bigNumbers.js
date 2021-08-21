import React from 'react'
import { ImListNumbered as icon } from "react-icons/im";

const bigNumbersPreview = ({ value }) => {
  const { bigNumbers } = value;
  return (
    <div>{bigNumbers}</div>
  )
}

export default {
  // computer name
  name: "bigNumbers",
  // visible title
  title: "Big Numbers",
  type: "array",
  of: [{ type: "string" }],
  options: {
    layout: 'grid'
  },
  icon,
  preview: {
    select: {
      bigNumbers: "bigNumbers"
    },
    component: bigNumbersPreview,
  }
}

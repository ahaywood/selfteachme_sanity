import React from "react";
import { RiQuestionAnswerLine as icon } from "react-icons/ri";

const LargeNumberPreview = ({ value }) => {
  // const { item } = value;
  // return <ol>{item && item.map((item) => <li>{item.content}</li>)}</ol>;
  return <pre>{JSON.stringify(value, null, 2)}</pre>;
};

export default {
  // computer name
  name: "largeNumber",
  // visible title
  title: "Large Numbers",
  type: "object",
  icon,
  fields: [
    {
      name: "item",
      title: "Item",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "content",
              title: "Content",
              type: "markdown",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    component: LargeNumberPreview,
  },
};

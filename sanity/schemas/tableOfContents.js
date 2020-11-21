import React from "react";

const TableOfContentsPreview = ({ value }) => {
  const { table } = value;
  return (
    <ul>
      {table &&
        table.map((item) => (
          <li>
            {item.here ? "👉 " : ""}
            {item.pageName}
          </li>
        ))}
    </ul>
  );
};

export default {
  // computer name
  name: "tableOfContents",
  // visible title
  title: "Table of Contents",
  type: "object",
  fields: [
    {
      name: "table",
      title: "Table",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "pageName", type: "string", title: "Page Name" },
            {
              name: "link",
              title: "Link",
              type: "reference",
              to: [
                { type: "post" },
                // other types you may want to link to
              ],
            },
            { name: "here", type: "boolean", title: "Here?" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      table: "table",
    },
    component: TableOfContentsPreview,
  },
};

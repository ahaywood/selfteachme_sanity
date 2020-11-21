import { FaListUl as icon } from "react-icons/fa";

export default {
  // computer name
  name: "snippetCategory",
  // visible title
  title: "Snippet Categories",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "name",
      published: "published",
    },
    prepare: ({ title, published }) => {
      return {
        title: `${published ? "✅" : ""} ${title}`,
      };
    },
  },
};

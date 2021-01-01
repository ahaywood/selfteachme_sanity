import { FaListUl as icon } from "react-icons/fa";

export default {
  // computer name
  name: "category",
  // visible title
  title: "Post Categories",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Category",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      options: {
        layout: "switch"
      }
    },
    {
      name: "intro",
      title: "Intro",
      type: "blockContent",
    },
  ],
};

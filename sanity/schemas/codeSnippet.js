import { FaRegFileCode as icon } from "react-icons/fa";

export default {
  // computer name
  name: "codeSnippet",
  // visible title
  title: "Code Snippets",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
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
    { name: "published", title: "Published?", type: "boolean" },
    {
      name: "meta",
      title: "META Data",
      type: "postMeta",
    },
    {
      name: "snippetCategory",
      title: "Category",
      type: "reference",
      to: [{ type: "snippetCategory" }],
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "name",
      category: "snippetCategory.name",
    },
    prepare: ({ title, category }) => {
      console.log(category);
      return { title, subtitle: category };
    },
  },
};

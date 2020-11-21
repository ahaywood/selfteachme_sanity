import { GrDocumentText as icon } from "react-icons/gr";

export default {
  // computer name
  name: "legal",
  // visible title
  title: "Legal",
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
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
};

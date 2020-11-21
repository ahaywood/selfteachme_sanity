import { MdWeb as icon } from "react-icons/md";

export default {
  // computer name
  name: "landingPage",
  // visible title
  title: "Landing Pages",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "videoInHeader",
      title: "Video in Header",
      type: "youtube",
    },
    {
      name: "layout",
      title: "Layout",
      type: "array",
      of: [
        { type: "youtube" },
        { type: "codepen" },
        { type: "fullWidthImage" },
        { type: "code" },
        { type: "twoColumnText" },
        { type: "box" },
        { type: "blockContent" },
      ],
    },
  ],
};

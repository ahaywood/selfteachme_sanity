import { RiFireLine as icon } from "react-icons/ri";

export default {
  // computer name
  name: "brandsWorkedWith",
  // visible name
  title: "Brands Worked With",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "blendMode",
      title: "Background Color of Logo",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          {
            title: "Black Background",
            value: "screen",
          },
          {
            title: "White Background",
            value: "multiply",
          },
          {
            title: "Transparent",
            value: "none",
          },
        ],
      },
    },
  ],
  orderings: [
    {
      // computer name
      name: "displayOrder",
      // visible name
      title: "Display Order",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      name: "alphabetical",
      title: "Alphabetical Order",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
};

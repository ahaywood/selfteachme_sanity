import { FaToolbox as icon } from "react-icons/fa";

export default {
  // computer name
  name: "use",
  // visible title
  title: "Tooling",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Office", value: "office" },
          { title: "Always in my Bag", value: "bag" },
          { title: "Audio / Video Equipment", value: "av" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "button",
      title: "Button / Affiliate Information",
      type: "affiliateButton",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      category: "category",
    },
    prepare: ({ title, media, category }) => {
      return { title, media, subtitle: category };
    },
  },
};

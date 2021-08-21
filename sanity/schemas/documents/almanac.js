import { GoBookmark as icon } from "react-icons/go";

export default {
  name: "almanac",
  title: "Almanac",
  type: "document",
  icon,
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "meta",
      title: "META Data",
      type: "postMeta",
    },
    {
      name: "hero",
      title: "Hero",
      type: "image",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Selector", value: "selector " },
          { title: "Property", value: "property" },
        ],
        layout: "radio",
      },
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
    {
      name: "relatedProperties",
      title: "Related Properties",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "otherResources",
      title: "Other Resources",
      type: "array",
      of: [
        {
          name: "linkAndUrl",
          title: "Link and URL",
          type: "object",
          fields: [
            {
              name: "linkName",
              title: "Link Name",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "canIUse",
      title: "Can I Use Property Name",
      type: "string",
      description:
        "Using Interactive Embeds, generated https://caniuse.bitsofco.de/",
    },
  ],
};

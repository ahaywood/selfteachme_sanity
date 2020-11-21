export default {
  name: "postDetails",
  title: "Details",
  type: "object",
  fields: [
    { name: "datePublished", title: "Date Published", type: "date" },
    { name: "dateUpdated", title: "Date Updated", type: "date" },
    { name: "published", title: "Published?", type: "boolean" },
    { name: "excerpt", title: "Excerpt / Description", type: "text" },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};

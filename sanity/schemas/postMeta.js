export default {
  name: "postMeta",
  title: "Post Meta",
  type: "object",
  fields: [
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text" },
    { name: "ogTitle", title: "og Title", type: "string" },
    { name: "ogDescription", title: "og Description", type: "text" },
    { name: "ogImage", title: "og Image", type: "image" },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};

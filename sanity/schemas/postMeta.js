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
    { name: "twitterTitle", title: "Twitter Title", type: "string" },
    { name: "twitterDescription", title: "Twitter Description", type: "text" },
    { name: "twitterImage", title: "Twitter Image", type: "image" },
    { name: "twitterImageAlt", title: "Twitter Image Alt", type: "string" }
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};

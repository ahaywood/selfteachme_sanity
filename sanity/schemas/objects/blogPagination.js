export default {
  name: "blogPagination",
  title: "Pagination",
  type: "object",
  fields: [
    { name: "previousPost", title: "Previous Post", type: "reference", to: [{ type: 'post' }] },
    { name: "nextPost", title: "Next Post", type: "reference", to: [{ type: 'post' }] },
  ]
}
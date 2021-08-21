export default {
  name: "affiliateButton",
  title: "Affiliate Button",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Button Label",
      type: "string",
    },
    {
      name: "link",
      title: "Button Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "icon",
      title: "Button Icon",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Amazon", value: "amazon" },
        ],
        layout: "dropdown",
      },
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};

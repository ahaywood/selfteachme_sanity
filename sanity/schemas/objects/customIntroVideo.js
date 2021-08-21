export default {
  name: "customIntroVideo",
  title: "Custom Intro Video",
  type: "object",
  fields: [
    {
      name: "useCustomIntroVideo",
      title: "Use custom intro video",
      type: "boolean",
      options: {
        layout: "switch",
      },
    },
    {
      name: "introVideo",
      title: "Custom Intro Video",
      type: "youtube",
    },
    {
      name: "introContent",
      title: "Custom Intro Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};

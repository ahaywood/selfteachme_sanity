import { GrMultiple as icon } from "react-icons/gr";

export default {
  // computer name
  name: "Series",
  // visible title
  title: "Series",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
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
      name: "meta",
      title: "META Data",
      type: "postMeta",
    },
    {
      name: "existingIntroVideo",
      title: "Existing Intro Video",
      type: "reference",
      to: [{ type: "post" }],
    },
    {
      name: "customIntroVideo",
      title: "Custom Intro Video",
      type: "customIntroVideo",
    },
    // {
    //   name: "leadMagnet",
    //   title: "Lead Magnet",
    //   type: "leadMagnet"
    // }.
    {
      name: "postsAndVideos",
      title: "Posts and Videos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.unique(),
    },
  ],
};

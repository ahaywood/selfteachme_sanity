import { GrCompass as icon } from "react-icons/gr";

export default {
  // computer name
  name: "guide",
  // visible title
  title: "Guides",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Post Subtitle",
      type: "string",
    },
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
      name: "content",
      title: "Content",
      type: "blockContent",
    },
    {
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "postDetails",
      title: "Details",
      type: "postDetails",
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
    { name: "titleWithinHero", title: "Title within Hero", type: "string" },
  ],
  preview: {
    select: {
      title: "title",
      media: "hero",
      subtitle: "subtitle",
      published: "postDetails.published",
    },
    prepare: ({ title, media, subtitle, postId, published, video }) => {
      return {
        title: `${published ? "✅" : ""} :: ${title}`,
        media,
        subtitle: subtitle,
      };
    },
  },
};

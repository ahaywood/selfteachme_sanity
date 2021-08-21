import { BiGlasses as icon } from "react-icons/bi";

export default {
  // computer name
  name: "resources",
  // visible title
  title: "Resources",
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
      name: 'resourceType',
      title: 'Type of Resource',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'YouTube Video', value: 'youtube' },
          { title: 'Article', value: 'article' },
          { title: 'Course', value: 'course' },
          { title: 'Tweet', value: 'tweet' },
        ]
      }
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
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

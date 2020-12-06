import { GoPencil as icon } from "react-icons/go";

export default {
  // computer name
  name: "post",
  // visible title
  title: "Posts",
  type: "document",
  icon,
  fields: [
    {
      name: "postId",
      title: "ID",
      type: "string",
    },
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
    {
      name: "video",
      title: "Video",
      type: "youtube",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "hero",
      subtitle: "subtitle",
      published: "postDetails.published",
    },
    prepare: ({ title, media, subtitle, published }) => {
      return {
        title: `${published ? "✅" : ""} ${title}`,
        media,
        subtitle: subtitle,
      };
    },
  },
};

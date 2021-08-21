import { FaRegNewspaper as icon } from "react-icons/fa";

export default {
  // computer name
  name: "newsletter",
  // visible title
  title: "Newsletters",
  type: "document",
  icon,
  fields: [
    {
      name: "newsletterId",
      title: "ID",
      type: "string",
    },
    {
      name: "title",
      title: "Post Title",
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
  ],
  preview: {
    select: {
      postId: "newsletterId",
      title: "title",
      media: "hero",
      subtitle: "subtitle",
      published: "postDetails.published",
    },
    prepare: ({ title, media, subtitle, postId, published, video }) => {
      return {
        title: `${published ? "✅" : ""} ${newsletterId ? newsletterId : ""} :: ${title}`,
        media
      };
    },
  },
};

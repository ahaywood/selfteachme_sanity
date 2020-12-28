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
      name: "video",
      title: "Video",
      type: "youtube",
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
    {
      name: "blogPagination",
      title: "Pagination",
      type: "blogPagination"
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
  orderings: [
    {
      title: "Title",
      name: "title",
      by: [
        { field: 'title', direction: 'asc' }
      ]
    }, {
      title: 'Post ID Ascending',
      name: 'postId',
      by: [
        { field: 'postId', direction: 'asc' }
      ]
    }, {
      title: 'Post ID Descending',
      name: 'postId',
      by: [
        { field: 'postId', direction: 'desc' }
      ]
    },
  ],
  preview: {
    select: {
      postId: "postId",
      title: "title",
      media: "hero",
      subtitle: "subtitle",
      published: "postDetails.published",
      video: "video",
    },
    prepare: ({ title, media, subtitle, postId, published, video }) => {
      return {
        title: `${published ? "✅" : ""} ${video ? "📹" : "✍️"} ${postId ? postId : ""} :: ${title}`,
        media,
        subtitle: subtitle,
      };
    },
  },
};

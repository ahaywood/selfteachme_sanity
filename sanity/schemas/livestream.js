import { FaTwitch as icon } from "react-icons/fa";

export default {
  name: "livestream",
  title: "Livestream",
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
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "eventDate",
      title: "Event Date",
      type: "date",
      dateFormat: "MM-DD-YYYY",
    },
    {
      name: "promotionalInformation",
      title: "Promotional Information",
      type: "blockContent",
    },
    {
      name: "postDetails",
      title: "Details",
      type: "postDetails",
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
  ],
};

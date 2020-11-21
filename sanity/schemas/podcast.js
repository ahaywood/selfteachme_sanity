import { FaPodcast as icon } from "react-icons/fa";

export default {
  name: "podcast",
  title: "Podcast",
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
      name: "episodeNumber",
      title: "Episode Number",
      type: "number",
    },
    {
      name: "coverArt",
      title: "Cover Art",
      type: "image",
    },
    {
      name: "airDate",
      title: "Air Date",
      type: "date",
      dateFormat: "MM-DD-YYYY",
    },
    {
      name: "embedLink",
      title: "Embed Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
        }),
    },
    {
      name: "showNotes",
      title: "Show Notes",
      type: "blockContent",
    },
  ],
};

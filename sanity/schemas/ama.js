import { FaQuestion as icon } from "react-icons/fa";

export default {
  // computer name
  name: "ama",
  // visible title
  title: "Ask Me Anything",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "question",
      title: "Question",
      type: "text",
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

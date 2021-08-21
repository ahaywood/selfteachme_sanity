import { GrBook as icon } from "react-icons/gr";

export default {
  // computer name
  name: "glossary",
  // visible title
  title: "Glossary",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

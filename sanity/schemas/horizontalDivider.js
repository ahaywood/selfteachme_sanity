import { GoHorizontalRule as icon } from "react-icons/go"

export default {
  name: "horizontalDivider",
  title: "Horizontal Divider",
  type: "object",
  icon,
  fields: [
    {
      name: "margin",
      title: "Marin",
      type: "string",
      options: {
        list: ['Tick on the Left', 'Centered Pluses']
      }
    }
  ]
}
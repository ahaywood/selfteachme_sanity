import { AiOutlineLine as icon } from "react-icons/ai";

const horizontalDividerPreview = () => <hr />;

export default {
  name: "horizontalDivider",
  title: "Horizontal Divider",
  type: "span",
  icon,
  preview: {
    component: horizontalDividerPreview,
  },
};

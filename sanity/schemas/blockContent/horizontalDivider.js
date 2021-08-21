import { GoHorizontalRule as icon } from "react-icons/go"
import { AiOutlineLine } from "react-icons/ai"

const HorizontalRuler = ({ value }) => {
  const { type } = value;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}><AiOutlineLine /></div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Horizontal Divider</h2>
      </div>
      <div>
        {type}
      </div>
    </div>
  );
}

export default {
  name: "horizontalDivider",
  title: "Horizontal Divider",
  type: "object",
  icon,
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      description: "How should the horizontal divider be displayed?",
      options: {
        list: [
          { title: 'Tick on the Left', value: "tick" },
          { title: 'Centered Pluses', value: 'centeredPluses' },
          { title: 'Solid Divider', value: 'solidDivider' }
        ],
        layout: "radio",
        direction: 'vertical'
      }
    }
  ]
}
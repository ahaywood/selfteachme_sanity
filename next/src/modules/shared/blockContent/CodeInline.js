import { Code, dracula } from "react-code-blocks";

const CodeInline = (props) => (
  <span className="text-lg"><Code language="text" text={props.children} theme={dracula}></Code></span>
);

export { CodeInline };

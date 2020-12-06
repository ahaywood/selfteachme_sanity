import { Code, dracula } from "react-code-blocks";

const CodeInline = (props) => (
  <Code language="text" text={props.children} theme={dracula}></Code>
);

export { CodeInline };

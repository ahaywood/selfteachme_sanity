import { CopyBlock, dracula } from "react-code-blocks";

const CodeBlock = (props) => {
  return (
    <div className="font-mono">
      <CopyBlock
        codeBlock
        language={props.node.language}
        text={props.node.code}
        theme={dracula}
      />
    </div>
  );
};

export { CodeBlock };

import { CopyBlock, dracula } from "react-code-blocks";

const CodeBlock = ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;

  let codeLang;
  if (language === 'html') {
    codeLang = 'markup';
  } else if (language === 'sh') {
    codeLang = 'powershell';
  } else {
    codeLang = language;
  }

  return (
    <div className="font-mono col-start-4 col-span-6 mt-8 mb-12">
      <CopyBlock
        codeBlock
        language={codeLang}
        text={code}
        theme={dracula}
      />
    </div>
  );
};

export { CodeBlock };

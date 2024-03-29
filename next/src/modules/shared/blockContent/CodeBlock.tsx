import { CopyBlock, dracula } from 'react-code-blocks';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  node: {
    language: string;
    code: string;
  };
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const CodeBlock = ({ node }: Props): JSX.Element => {
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
    <div className="font-mono col-span-12 md:col-start-4 md:col-span-6 mt-8 mb-12">
      <CopyBlock codeBlock language={codeLang} text={code} theme={dracula} />
    </div>
  );
};

export { CodeBlock };

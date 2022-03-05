import { Code, dracula } from 'react-code-blocks';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const CodeInline = ({ children }: Props): JSX.Element => (
  <span className="text-lg">
    <Code language="text" text={children} theme={dracula} />
  </span>
);

export { CodeInline };

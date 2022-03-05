/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Blockquote = ({ children }: Props): JSX.Element => (
  <blockquote className="font-modern text-2xl text-center">{children}</blockquote>
);
export { Blockquote };

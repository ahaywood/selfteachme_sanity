/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Highlight = ({ children }: Props): JSX.Element => <span className="bg-gold rounded-md px-1">{children}</span>;

export { Highlight };

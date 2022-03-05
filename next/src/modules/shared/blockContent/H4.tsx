/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const H4 = ({ children }: Props): JSX.Element => (
  <h4 className="font-sans uppercase font-black text-2xl">{children}</h4>
);

export { H4 };

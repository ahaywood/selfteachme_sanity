/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Keyboard = ({ children }: Props): JSX.Element => (
  <span className="font-mono bg-almostWhite shadow-sm rounded-md px-1 border-1 border-gray-300">{children}</span>
);

export { Keyboard };

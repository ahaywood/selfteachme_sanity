/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element | string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const P = ({ children }: Props): JSX.Element => (
  <div className="p col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">
    <p>{children}</p>
  </div>
);
export { P };

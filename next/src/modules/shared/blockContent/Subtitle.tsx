/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Subtitle = ({ children }: Props): JSX.Element => (
  <div className="col-start-4 col-span-6">
    <h2 className="font-condensed text-baliHai text-5xl">{children}</h2>
  </div>
);

export { Subtitle };

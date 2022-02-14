/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
  className: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ButtonSubmit = ({ children, className }: Props): JSX.Element => (
  <button className={`button ${className || 'primary'}`} type="submit" name="submit">
    <div className="outline" />
    <div className="content">{children}</div>
  </button>
);

export { ButtonSubmit };

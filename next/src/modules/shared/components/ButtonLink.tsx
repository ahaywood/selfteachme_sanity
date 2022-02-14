/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
  className?: string;
  href: string;
  target?: string;
}

const ButtonLink = ({ children, className, href, target }: Props): JSX.Element => (
  <a href={href} className={`button ${className || 'primary'}`} target={target || '_self'}>
    <div className="outline" />
    <div className="content">{children}</div>
  </a>
);

export { ButtonLink };

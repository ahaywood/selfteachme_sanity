const ButtonLink = ({ children, className, href, target }) => (
  <a href={href} className={`button ${className || 'primary'}`} target={target || '_self'}>
    <div className="outline" />
    <div className="content">{children}</div>
  </a>
);

export { ButtonLink };

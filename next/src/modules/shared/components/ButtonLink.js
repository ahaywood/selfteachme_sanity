const ButtonLink = ({ children, className, href, target }) => {
  return (
    <a href={href} className={`button ${className ? className : "primary"}`} target={target ? target : "_self"}>
      <div className="outline"></div>
      <div className="content">{children}</div>
    </a>
  );
};

export { ButtonLink };

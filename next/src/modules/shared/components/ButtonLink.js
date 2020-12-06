const ButtonLink = ({ children, className, href }) => {
  return (
    <a href={href} className={`button ${className ? className : "primary"}`}>
      <div className="outline"></div>
      <div className="content">{children}</div>
    </a>
  );
};

export { ButtonLink };

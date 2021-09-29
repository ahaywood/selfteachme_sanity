const ButtonSubmit = ({ children, className }) => (
  <button className={`button ${className || 'primary'}`} type="submit" name="submit">
    <div className="outline" />
    <div className="content">{children}</div>
  </button>
);

export { ButtonSubmit };

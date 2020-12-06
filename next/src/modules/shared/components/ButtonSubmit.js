const ButtonSubmit = ({ children, className }) => {
  return (
    <button
      className={`button ${className ? className : "primary"}`}
      type="submit"
      name="submit"
    >
      <div className="outline"></div>
      <div className="content">{children}</div>
    </button>
  );
};

export { ButtonSubmit };

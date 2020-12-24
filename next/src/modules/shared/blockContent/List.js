const List = (props) => {
  if (props.type === "bullet") {
    return (
      <div className="col-start-4 col-span-6">
        <ul>{props.children}</ul>
      </div>
    );
  }
  if (props.type === "number") {
    return (
      <div className="col-start-4 col-span-6">
        <ol className="large-numbers small">{props.children}</ol>
      </div>
    );
  }
  return (
    <div className="col-start-4 col-span-6">{props.children}</div>
  );
};

export { List };

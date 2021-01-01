const List = (props) => {
  if (props.type === "bullet") {
    return (
      <div className="block-content col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">
        <ul>{props.children}</ul>
      </div>
    );
  }
  if (props.type === "number") {
    return (
      <div className="col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">
        <ol className="large-numbers small">{props.children}</ol>
      </div>
    );
  }
  return (
    <div className="col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">{props.children}</div>
  );
};

export { List };

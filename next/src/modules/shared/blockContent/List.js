const List = (props) => {
  if (props.type === "bullet") {
    return <ol className="bg-purple-600">{props.children}</ol>;
  }
  if (props.type === "number") {
    return <ul className="bg-blue-400">{props.children}</ul>;
  }
  return props.children;
};

export { List };

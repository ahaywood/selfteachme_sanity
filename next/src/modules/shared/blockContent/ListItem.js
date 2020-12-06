const ListItem = (props) => {
  if (props.node.listItem === "number") {
    return <li>{props.children}</li>;
  }
  if (props.node.listItem === "bullet") {
    return <li>{props.children}</li>;
  }
};

export { ListItem };

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
  node: {
    listItem: string;
  };
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ListItem = ({ children, node }: Props): JSX.Element => {
  if (node.listItem === 'number') {
    return <li>{children}</li>;
  }
  if (node.listItem === 'bullet') {
    return <li>{children}</li>;
  }
};

export { ListItem };

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
  type: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const List = ({ children, type }: Props): JSX.Element => {
  if (type === 'bullet') {
    return (
      <div className="block-content col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">
        <ul>{children}</ul>
      </div>
    );
  }
  if (type === 'number') {
    return (
      <div className="col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">
        <ol className="large-numbers small">{children}</ol>
      </div>
    );
  }
  return <div className="col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">{children}</div>;
};

export { List };

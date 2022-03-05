/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Snippet;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const OneSnippet = ({ content }: Props): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(content);
  return <div>One Snippet</div>;
};

export { OneSnippet };

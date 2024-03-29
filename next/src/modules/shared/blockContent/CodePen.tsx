/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  node: {
    url: string;
  };
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const CodePen = (props: Props): JSX.Element => {
  const {
    node: { url },
  } = props;
  const splitURL = url.split('/');
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=dark&default-tab=result`;
  return (
    <div className="col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0">
      <iframe
        height="370"
        style={{ width: '100%' }}
        scrolling="no"
        title="CodePen Embed"
        src={embedUrl}
        frameBorder="no"
        allowTransparency
        allowFullScreen
      />
    </div>
  );
};

export { CodePen };

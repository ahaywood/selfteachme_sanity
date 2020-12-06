const ExternalLink = (props) => {
  return (
    <a
      href={props.mark.href}
      className="font-bold text-brightPink underline hover:text-sapphire hover:no-underline"
      target={props.mark.blank ? "_blank" : "_self"}
    >
      {props.children}
    </a>
  );
};

export { ExternalLink };

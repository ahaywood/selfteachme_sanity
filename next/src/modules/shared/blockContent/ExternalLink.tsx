/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  mark: {
    href: string;
    blank: boolean;
  };
  children: JSX.Element;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ExternalLink = ({ children, mark }: Props): JSX.Element => (
  <a
    href={mark.href}
    className="font-bold text-brightPink underline hover:text-sapphire hover:no-underline"
    target={mark.blank ? '_blank' : '_self'}
  >
    {children}
  </a>
);

export { ExternalLink };

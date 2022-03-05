import Link from 'next/link';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
  mark: {
    slug: {
      current: string;
    };
    internalSection: string;
  };
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const InternalLink = ({ children, mark }: Props): JSX.Element => {
  // destructure 'current' and 'internalSection'
  const {
    slug: { current },
    internalSection,
  } = mark;

  if (current) {
    return (
      <Link href={`/${internalSection.toLowerCase()}/${current}`}>
        <a className="font-bold text-brightPink underline hover:text-sapphire hover:no-underline">{children}</a>
      </Link>
    );
  }
  return children;
};
export { InternalLink };

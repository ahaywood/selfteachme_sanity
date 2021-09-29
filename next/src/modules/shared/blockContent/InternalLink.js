import { useEffect, useState } from 'react';
import Link from 'next/link';

const InternalLink = (props) => {
  // destructure 'current' and 'internalSection'
  const {
    mark: {
      slug: { current },
      internalSection,
    },
  } = props;

  if (current) {
    return (
      <Link href={`/${internalSection.toLowerCase()}/${current}`}>
        <a className="font-bold text-brightPink underline hover:text-sapphire hover:no-underline">{props.children}</a>
      </Link>
    );
  }
  return props.children;
};
export { InternalLink };

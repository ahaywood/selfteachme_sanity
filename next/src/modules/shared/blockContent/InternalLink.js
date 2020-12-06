import { useEffect, useState } from "react";
import Link from "next/link";

const InternalLink = (props) => {
  const [url, setUrl] = useState();

  // destructure 'current' and 'internalSection'
  const {
    mark: {
      slug: { current },
      internalSection,
    },
  } = props;

  // check which section of the site we're in
  const buildUrl = () => {
    switch (internalSection) {
      case "post":
        setUrl(`/blog/${current}`);
        break;
      case "legal":
        setUrl(`/legal/${current}`);
        break;
      default:
        setUrl(current);
    }
  };

  useEffect(() => {
    buildUrl();
  }, []);

  if (url) {
    return (
      <Link href={url}>
        <a className="font-bold text-brightPink underline hover:text-sapphire hover:no-underline">
          {props.children}
        </a>
      </Link>
    );
  } else {
    return props.children;
  }
};
export { InternalLink };

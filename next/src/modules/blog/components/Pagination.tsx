// Pagination for the blog index
import Link from 'next/link';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  section: string;
  previousPageNumber?: string;
  nextPageNumber?: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Pagination = ({ section, previousPageNumber, nextPageNumber }: Props): JSX.Element => (
  <div>
    <div>
      {nextPageNumber && (
        <Link href={`/${section}/${nextPageNumber}`}>
          <a>Next</a>
        </Link>
      )}
    </div>
    <div>
      {previousPageNumber && (
        <Link href={`/${section}/${previousPageNumber}`}>
          <a>Previous</a>
        </Link>
      )}
    </div>
  </div>
);

export { Pagination };

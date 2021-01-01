// Pagination for the blog index
import Link from "next/link";

const Pagination = ({ section, previousPageNumber, nextPageNumber }) => {
  return (
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
  )
}

export { Pagination };

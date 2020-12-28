import Link from "next/link";

const PaginationForIndex = ({section, previousPageNumber, nextPageNumber}) => {
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

export { PaginationForIndex };

import Link from "next/link";

const RelatedPosts = ({ relatedPosts }) => {
  return (
    <div className="col-span-12 md:col-span-5 px-mobile md:pl-12">
      <h2 className="font-handwriting text-7xl">Related Posts</h2>
      <ul>
        {relatedPosts && relatedPosts.map(item => (
          <li
            className="font-modern text-3xl py-4 border-b-1 border-opacity-40 border-baliHai mb-0"
            key={item._id}
          >
            <Link href={item.slug.current}>
              <a>
                <h3 className="highlight">{item.title}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { RelatedPosts }

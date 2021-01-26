import Link from "next/link";

const TableOfContents = (props) => {
  const { node: { table } } = props;
  console.log(table)
  return (
    <div className="col-span-12 md:col-start-4 md:col-span-6 bg-almostWhite p-8 mb-8">
      <h3 className="font-mono font-bold mb-2">This post is part of a larger series:</h3>
      {table && (
        <ul className="squre-bullets">
          {table.map((item) => {
            if (item.here) {
              return (
                <li className="mb-2 pb-0 bg-white px-2"><span className="font-condensed text-sapphire tracking-widest">YOU ARE HERE >></span> {item.pageName}</li>
              )
            } else {
              return (
                <li key={item._key} className="mb-2 pb-0">
                  <Link href={`${item.link._type}/${item.link.slug.current}`}>
                    <a className="text-brightPink font-bold underline hover:text-sapphire">
                      {item.pageName}
                    </a>
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      )}
    </div>
  )
}

export { TableOfContents };

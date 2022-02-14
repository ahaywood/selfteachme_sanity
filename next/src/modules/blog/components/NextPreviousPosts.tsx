import Link from 'next/link';
import Image from 'next/image';
import { prettyDate } from 'utils/date';

const NextPreviousPosts = ({ blogPagination }) => {
  const { nextPost, previousPost } = blogPagination;

  // determine which date to show
  const ShowPostDate = (publishedDate, updatedDate) => {
    if (updatedDate) {
      return prettyDate(updatedDate);
    }
    if (publishedDate) {
      return prettyDate(publishedDate);
    }
    return '';
  };

  return (
    <div className="bg-pagination cover p-8 col-span-12 md:col-span-5 md:col-start-2 mb-16 md:mb-0">
      {/* next post */}
      {nextPost && (
        <div className="my-8">
          <Link href={`/blog/${nextPost.slug.current}`}>
            <a>
              <h4 className="font-condensed text-gold uppercase text-2xl">
                {ShowPostDate(nextPost.datePublished, nextPost.dateUpdated)}
              </h4>
              <h3 className="font-modern text-white text-5xl">{nextPost.title}</h3>
            </a>
          </Link>
        </div>
      )}

      <div className="-left-12 relative">
        <Image src="/img/hr--short--pink@2x.png" width="155" height="13" />
      </div>

      {/* previous post */}
      {previousPost && (
        <div className="my-8">
          <Link href={`/blog/${previousPost.slug.current}`}>
            <a>
              <h4 className="font-condensed text-gold uppercase text-2xl">
                {ShowPostDate(previousPost.datePublished, previousPost.dateUpdated)}
              </h4>
              <h3 className="font-modern text-white text-5xl">{previousPost.title}</h3>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export { NextPreviousPosts };

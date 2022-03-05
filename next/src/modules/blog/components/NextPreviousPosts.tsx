import Link from 'next/link';
import Image from 'next/image';
import { showPostDate } from 'utils/date';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  nextPost?: SelfTeach.Blog;
  previousPost?: SelfTeach.Blog;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const NextPreviousPosts = ({ nextPost, previousPost }: Props): JSX.Element => {
  // determine which date to show for the next post
  const NextPostDate = () => {
    const dateUpdated = nextPost?.postDetails?.dateUpdated ? nextPost.postDetails.dateUpdated : '';
    const datePublished = nextPost?.postDetails?.datePublished ? nextPost.postDetails.datePublished : '';

    return showPostDate(dateUpdated, datePublished, false);
  };

  // determine which date to show for the previous post
  const PreviousPostDate = () => {
    const dateUpdated = previousPost?.postDetails?.dateUpdated ? previousPost.postDetails.dateUpdated : '';
    const datePublished = previousPost?.postDetails?.datePublished ? previousPost.postDetails.datePublished : '';

    return showPostDate(dateUpdated, datePublished, false);
  };

  return (
    <div className="bg-pagination cover p-8 col-span-12 md:col-span-5 md:col-start-2 mb-16 md:mb-0">
      {/* next post */}
      {nextPost && (
        <div className="my-8">
          <Link href={`/blog/${nextPost.slug.current}`}>
            <a>
              <h4 className="font-condensed text-gold uppercase text-2xl">{NextPostDate()}</h4>
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
              <h4 className="font-condensed text-gold uppercase text-2xl">{PreviousPostDate()}</h4>
              <h3 className="font-modern text-white text-5xl">{previousPost.title}</h3>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export { NextPreviousPosts };

import { Hero } from 'modules/shared/components/Hero';
import BlockContent from '@sanity/block-content-to-react';
import cx from 'classnames';
import { serializers } from 'modules/shared/blockContent/Serializers';
import { YouTubeVideo } from 'modules/shared/components/YouTubeVideo';
import { showPostDate } from 'utils/date';
import { getYouTubeId } from 'utils/youtube';
import { Comments } from 'modules/shared/components/Comments';
import { NextPreviousPosts } from 'modules/blog/components/NextPreviousPosts';
import { RelatedPosts } from 'modules/blog/components/RelatedPosts';
import { EmailNewsletter } from 'modules/shared/components/EmailNewsletter';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  post: SelfTeach.Blog;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const IndividualBlog = ({ post }: Props): JSX.Element => {
  const {
    _id,
    blogPagination,
    content,
    hero,
    postDetails,
    relatedPosts,
    subtitle,
    title,
    titleWithinHero,
    video,
  } = post;

  const { nextPost, previousPost } = blogPagination || {};

  // determine date to show
  const PostDate = () => {
    const dateUpdated = postDetails?.dateUpdated ? postDetails.dateUpdated : '';
    const datePublished = postDetails?.datePublished ? postDetails.datePublished : '';

    return (
      <h3 className="uppercase text-baliHai font-condensed tracking-wider text-2xl text-center mb-12">
        {showPostDate(dateUpdated, datePublished)}
      </h3>
    );
  };

  return (
    <>
      <div className={cx('content-grid move-content-up', { 'no-title': !titleWithinHero })}>
        <Hero title={titleWithinHero} src={hero} className="hero" />

        {/* content */}
        <div className="main">
          {video && <YouTubeVideo videoId={getYouTubeId(video.url)} />}

          <div className="px-12 pt-12">
            <h1 className="font-condensed text-6xl md:text-8xl uppercase text-center leading-stacked">{title}</h1>
            {subtitle && <h2 className="font-condensed text-4xl uppercase text-center text-baliHai">{subtitle}</h2>}
            <hr className="border-t-4 border-black my-8 max-w-md mx-auto" />
            {PostDate()}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <BlockContent blocks={content} serializers={serializers} />

        {/* comments */}
        <Comments className="col-span-12 px-8 md:px-0 md:col-start-4 md:col-span-6" id={_id} />
      </div>

      {/* pagination */}
      <section className="grid grid-cols-12 bg-almostWhite pb-12 md:py-12 mt-8">
        {(nextPost || previousPost) && <NextPreviousPosts nextPost={nextPost} previousPost={previousPost} />}
        {relatedPosts && <RelatedPosts relatedPosts={relatedPosts} />}
      </section>

      <div className="mt-8">
        {/* form was not displaying correctly without the wrapping div 🤷🏻‍♀️ */}
        <EmailNewsletter />
      </div>
    </>
  );
};

export { IndividualBlog };

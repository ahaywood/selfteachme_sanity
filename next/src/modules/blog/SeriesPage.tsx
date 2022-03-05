import { Hero } from 'modules/shared/components/Hero';
import { FullWidthBlogCard } from 'modules/shared/components/FullWidthBlogCard';
import { EmailNewsletter } from 'modules/shared/components/EmailNewsletter';
import { YouTubeVideo } from 'modules/shared/components/YouTubeVideo';
import { LeadMagnet } from 'modules/shared/components/LeadMagnet';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from 'modules/shared/blockContent/Serializers';
import { getYouTubeId } from 'utils/youtube';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Series;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SeriesPage = ({ content }: Props): JSX.Element => {
  const seriesIntro = () => {
    if (content.customIntroVideo.useCustomIntroVideo) {
      return (
        <>
          <div className="col-start-2 z-20">
            <YouTubeVideo videoId={getYouTubeId(content.customIntroVideo.introVideo.url)} />
          </div>

          {/* intro content */}
          <div className="col-start-2 mb-8 mt-8 px-20">
            <BlockContent blocks={content.customIntroVideo.introContent} serializers={serializers} />
          </div>
        </>
      );
    }
    if (content.existingIntroVideo) {
      return <div />;
    }
    return <div />;
  };

  return (
    <div className="content-grid move-content-up">
      <Hero title={content.name} src="/img/bg__contact.jpg" className="hero" />

      {/* intro video */}
      {seriesIntro()}

      {/* lead magnet */}
      <LeadMagnet
        action={content.leadMagnet.getForm}
        buttonLabel={
          <>
            <span role="img" aria-label="raise hand" className="-left-20 -top-8 text-7xl">
              🙋‍♀️
            </span>
            I want to be in the know.
          </>
        }
        className="col-start-1 col-span-3 my-10"
        heading={
          <>
            FREE Git Cheat sheet
            <span className="leading-10 relative -top-10">👏</span>
          </>
        }
      >
        <>
          <p>
            Since we're friends (right?!) I made you a FREE git cheat sheet. –-Just let me know what email address I
            need to send it to.
          </p>
          <p>
            I'll also send you a weekly email of the internet's best on web design and development chalked full of
            articles, tutorials, and pro tips to help you stay up to date.
          </p>
        </>
      </LeadMagnet>

      {/* content */}
      <div className="full-width blog-index ping-pong pt-8">
        {content?.postsAndVideos?.map((post) => (
          <div className="stripe" key={post._id}>
            <FullWidthBlogCard buttonStyle="tertiary" content={post} />
            <hr className="my-20 bg-horizontalPluses bg-no-repeat h-4 bg-center mx-auto max-w-6xl border-none" />
          </div>
        ))}
      </div>
      <EmailNewsletter className="full-width" />
    </div>
  );
};

export { SeriesPage };

import { Hero } from "modules/shared/components/Hero";
import { FullWidthBlogCard } from "modules/shared/components/FullWidthBlogCard";
import { Subnav } from "modules/shared/components/Subnav";
import { EmailNewsletter } from "modules/shared/components/EmailNewsletter";
import { YouTubeVideo } from "modules/shared/components/YouTubeVideo";
import { LeadMagnet } from "modules/shared/components/LeadMagnet";

const SeriesPage = (props) => {
  const { content } = props;
  console.log(content);

  const seriesIntro = () => {
    if (content.customIntroVideo.useCustomIntroVideo) {
      console.log('use custom intro');
      return (<div>
        <div className="col-start-2">
          <YouTubeVideo videoId="gwskGoK9qJw" />
        </div>

        {/* intro content */}
        <div className="col-start-2 mb-8 mt-8 px-20">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>);
    } else if (existingIntroVideo) {
      console.log('use an existing intro video');
      return <div></div>;
    } else {
      console.log('no intro found');
      return <div></div>;
    }
  }

  return (
    <div className="content-grid move-content-up">
      <Hero title={content.name} src="/img/bg__contact.jpg" className="hero" />

      {/* intro video */}
      {seriesIntro()}

      {/* lead magnet */}
      <LeadMagnet
        buttonLabel={<>
          <span
            role="img"
            aria-label="raise hand"
            className="-left-20 -top-8 text-7xl"
          >🙋‍♀️</span>
          I want to be in the know.</>}
        className="col-start-1 col-span-3 my-10"
        heading={<>FREE Git Cheatsheet
          <span className="leading-10 relative -top-10">👏</span></>
        }
      >
        <p>Since we're friends (right?!) I made you a FREE git cheatsheet. –-Just let me know what email address I need to send it to.</p>
        <p>I'll also send you a weekly email of the internet's best on web design and development chalked full of articles, tutorials, and pro tips to help you stay up to date.</p>
      </LeadMagnet>

      {/* content */}
      <div className="full-width blog-index ping-pong pt-8">
        {content?.postsAndVideos?.map((post) => {
          return (
            <div className="stripe" key={post._id}>
              <FullWidthBlogCard buttonStyle="tertiary" content={post} />
              <hr className="my-20 bg-horizontalPluses bg-no-repeat h-4 bg-center mx-auto max-w-6xl border-none" />
            </div>
          );
        })}
      </div>
      <EmailNewsletter className="full-width" />
    </div>
  );
};

export { SeriesPage };

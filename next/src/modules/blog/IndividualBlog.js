import { Head } from "next/head";
import { Hero } from "modules/shared/components/Hero";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "modules/shared/blockContent/Serializers";
import { Subnav } from "modules/shared/components/Subnav";
import { YouTubeVideo } from "modules/shared/components/YouTubeVideo";
import { prettyDate } from "utils/date";
import { getYouTubeId } from "utils/youtube";
import { Comments } from "modules/shared/components/Comments";
import { PaginationForIndividual } from "./components/PaginationForIndividual";
import { EmailNewsletter } from "modules/shared/components/EmailNewsletter";

const IndividualBlog = (props) => {
  const { blogPagination, content, hero, postDetails, title, titleWithinHero, video } = props;

  // determine date to show
  const ShowPostDate = () => {
    if (postDetails.dateUpdated) {
      return (<h3 className="uppercase text-baliHai font-condensed tracking-wider text-2xl text-center mb-12">Last Updated: {prettyDate(postDetails.dateUpdated)}</h3>)
    }
    else if (postDetails.datePublished) {
      return (<h3 className="uppercase text-baliHai font-condensed tracking-wider text-2xl text-center mb-12">Published: {prettyDate(postDetails.datePublished)}</h3>)
    }
    return '';
  }

  return (
    <>
      <div className={`content-grid move-content-up ${titleWithinHero ? '' : 'no-title'}`}>
        <Hero title={titleWithinHero} src={hero} className="hero" />

        {/* content */}
        <div className="main">
          {video && <YouTubeVideo videoId={getYouTubeId(video.url)} />}

          <div className="px-12 pt-12">
            <h1 className="font-condensed text-8xl uppercase text-center leading-stacked mb-8">{title}</h1>
            <hr className="border-t-4 border-black mb-8 max-w-md mx-auto" />
            {ShowPostDate}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <BlockContent blocks={content} serializers={serializers} />

        {/* comments */}
        <Comments className="col-start-4 col-span-6" />
      </div>

      {/* pagination */}
      <div className="mt-8">
        <PaginationForIndividual blogPagination={blogPagination} />
      </div>

      <div className="mt-8">{/* form was not displaying correctly without the wrapping div 🤷🏻‍♀️ */}
        <EmailNewsletter />
      </div>
    </>
  )
}

export { IndividualBlog }

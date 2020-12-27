import { Head } from "next/head";
import { Hero } from "modules/shared/components/Hero";
import BlockContent from "@sanity/block-content-to-react";
import { Subnav } from "modules/shared/components/Subnav";
import { YouTubeVideo } from "modules/shared/components/YouTubeVideo";
import { serializers } from "modules/shared/blockContent/Serializers";
import { prettyDate } from "utils/date";
import { getYouTubeId } from "utils/youtube";
import { Comments } from "modules/shared/components/Comments";

const IndividualBlog = (props) => {
  const { content, hero, postDetails, title, titleWithinHero, video } = props;

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
        {/* <Head><script async data-uid="26c48e83f3" src="https://selfteachme.ck.page/26c48e83f3/index.js"></script></Head> */}

        <Hero title={titleWithinHero} src={hero} className="hero" />

        {/* content */}
        <div className="bg-white z-20 col-start-2">
          {video && <YouTubeVideo videoId={getYouTubeId(video.url)} />}

          <div className="px-8 pt-8">
            <h1 className="font-condensed text-8xl uppercase text-center leading-stacked mb-8">{title}</h1>
            <hr className="border-t-4 border-black mb-8 max-w-md mx-auto" />
            {ShowPostDate}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <BlockContent blocks={content} serializers={serializers} />
      </div>

      {/* comments */}
      <Comments />

      {/* pagination */}
    </>
  )
}

export { IndividualBlog }

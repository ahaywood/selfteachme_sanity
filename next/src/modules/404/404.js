import { Hero } from "modules/shared/components/Hero"
import Link from "next/link";
import { LatestPosts } from "modules/shared/components/LatestPosts";
import { YouTubeVideo } from "modules/shared/components/YouTubeVideo";
import { SearchBar } from "modules/shared/components/SearchBar";

const FourOFourPage = ({ latestPosts }) => {
  return (
    <>
      <div className="content-grid move-content-up">
        <Hero title="404" src="/img/bg__contact.jpg" className="hero" />
        <div className="main px-8 pt-8 sm:pt-0 md:px-12 md:pt-12 flex flex-col sm:flow-row">
          <h2 className="font-handwriting text-6xl">Ugh!</h2>
          <div className="sm:ml-8">
            <h3 className="font-sans uppercase text-xl font-bold">THIS PAGE DOESN’T EXIST.</h3>
            <p>Don’t worry about it. You can either go to the <Link href="/"><a>homepage</a></Link> or stay here and watch a funny YouTube video.</p>
          </div>
        </div>
        <div className="col-start-2">
          <YouTubeVideo videoId="nlYlNF30bVg" />
        </div>
        <div className="col-start-2 px-8 py-12">
          <h3 className="uppercase font-condensed text-4xl">Seriously, Though</h3>
          <h4 className="uppercase font-condensed text-baliHai text-2xl tracking-wide">Maybe these links will help you find what you’re really looking for</h4>
        </div>
        {/* search bar */}
        <SearchBar className="col-span-3 mb-24" />
      </div>
      <LatestPosts latestPosts={latestPosts} />
    </>
  )
}

export { FourOFourPage }

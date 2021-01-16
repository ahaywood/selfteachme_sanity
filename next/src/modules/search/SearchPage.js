import { Hero } from "modules/shared/components/Hero";
import { SearchBar } from "modules/shared/components/SearchBar";
import { FullWidthBlogCard } from "modules/shared/components/FullWidthBlogCard";
import { useRouter } from "next/router";

const SearchPage = ({ content }) => {
  const router = useRouter();

  const displayResults = (length) => {
    if (length < 1) {
      return "No results were found."
    } else if (length < 2) {
      return "1 Result Found";
    } else {
      return `${length} results found`;
    }
  }

  return (
    <div className="content-grid">
      <Hero title={displayResults(content.length)} subtitle={`Keyword: ${router.query.keywords}`} src="/img/bg__contact.jpg" className="hero" />
      <SearchBar className="col-span-3 mb-12" />
      <div className="full-width ping-pong pt-8">
        {/* content */}
        {content?.map((post) => {
          return (
            <div className="stripe col-span-3" key={post._id}>
              <FullWidthBlogCard buttonStyle="tertiary" content={post} />
              <hr className="my-20 bg-horizontalPluses bg-no-repeat h-4 bg-center mx-auto max-w-6xl border-none" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { SearchPage }

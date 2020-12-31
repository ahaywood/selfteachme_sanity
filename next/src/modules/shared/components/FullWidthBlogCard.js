import Link from "next/link";
import { Icon } from "./icon";
import { ButtonLink } from "./ButtonLink";
import { getPostMonth, getPostDate } from "utils/date";
import { slugify } from "utils/slugify";

const FullWidthBlogCard = ({ content, buttonStyle = "" }) => {
  return (
    <div className="full-width-card grid md:grid-cols-12 md:gap-8 xl:gap-28 mb-12">
      <div className="image">
        {/* blog category */}
        {content.category && (
          <div className={`blog-category block py-4 px-5 absolute w-32 xl:w-auto ${slugify(content.category)}`}>
            <Link href={`/blog/c/${content?.categorySlug?.current}`}>
              <a className="font-condensed uppercase text-brightPink text-lg md:text-2xl">
                {content.category}
              </a>
            </Link>
          </div>
        )}

        {/* image */}
        <img src={content.hero} className="h-48 md:h-full w-full object-cover" loading="lazy" />

        {/* date */}
        {content.postDetails.datePublished && (
          <div className="blog-date bg-bunting text-white font-condensed text-center md:px-6 py-4 md:py-8 w-32 lg:w-24 absolute">
            <div className="uppercase text-xl">{getPostMonth(content.postDetails.datePublished)}</div>
            <div className="text-7xl">{getPostDate(content.postDetails.datePublished)}</div>
          </div>
        )}
      </div>
      <div className="content">
        {/* type of post */}
        <div className="font-condensed text-lg md:text-2xl uppercase text-baliHai mb-2">
          {content.postDetails.video ? (
            <>
              <Icon className="float-left mr-4" name="video" /> Video
            </>
          ) : (
              <>
                <Icon className="float-left mr-4" name="post" /> Post
            </>
            )}
        </div>

        {/* title */}
        <Link href={`/blog/${content.slug.current}`}>
          <a>
            <h2 className="font-modern text-4xl md:text-6xl highlight">{content.title}</h2>
          </a>
        </Link>
        <br />

        {/* excerpt */}
        <p className="mt-4 mb-10">{content.postDetails.excerpt}</p>

        {/* read post link */}
        <div className="ml-2 md:ml-0">
          <ButtonLink
            href={`/blog/${content.slug.current}`}
            className={buttonStyle}
          >
            <Icon className="float-left mr-2" name="arrow" /> Read Article
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export { FullWidthBlogCard };

import Link from "next/link";
import { Icon } from "./icon";
import { ButtonLink } from "./ButtonLink";

const FullWidthBlogCard = ({ content, buttonStyle = "" }) => {
  return (
    <div className="full-width-card grid grid-cols-12 gap-28 mb-12">
      <div className="image relative">
        {/* blog category */}
        <div className="blog-category block py-4 px-6 absolute">
          <Link href={`/blog/c/${content?.categorySlug?.current}`}>
            <a className="font-condensed uppercase text-brightPink text-xl">
              {content.category}
            </a>
          </Link>
        </div>

        {/* image */}
        <img src={content.hero} className="h-full w-full object-cover" />

        {/* date */}
        <div className="blog-date bg-bunting text-white font-condensed text-center px-6 py-8 w-24 absolute">
          <div className="uppercase text-xl">March</div>
          <div className="text-7xl">14</div>
        </div>
      </div>
      <div className="content pt-15">
        {/* type of post */}
        <div className="font-condensed text-xl uppercase text-baliHai mb-2">
          <Icon className="float-left mr-4" name="video" />
          Video
        </div>

        {/* title */}
        <Link href={`blog/${content.slug.current}`}>
          <a>
            <h2 className="font-modern text-6xl highlight">{content.title}</h2>
          </a>
        </Link>
        <br />

        {/* excerpt */}
        <p className="mt-4 mb-10">{content.postDetails.excerpt}</p>

        {/* read post link */}
        <ButtonLink
          href={`blog/${content.slug.current}`}
          className={buttonStyle}
        >
          <Icon className="float-left mr-2" name="arrow" /> Read Article
        </ButtonLink>
      </div>
    </div>
  );
};

export { FullWidthBlogCard };

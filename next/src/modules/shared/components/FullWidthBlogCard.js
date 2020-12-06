import Link from "next/link";
import { Icon } from "./icon";
import { ButtonLink } from "./ButtonLink";

const FullWidthBlogCard = ({ content }) => {
  return (
    <div className="grid grid-cols-2 gap-28 mb-12">
      <div className="relative">
        <div className="bg-almostWhite block py-4 px-6 absolute right-0 top-0">
          <Link href={`/blog/c/${content.categorySlug.current}`}>
            <a className="font-condensed uppercase text-brightPink text-xl">
              {content.category}
            </a>
          </Link>
        </div>
        <img src={content.hero} className="h-full w-full object-cover" />
        <div className="bg-bunting text-white font-condensed text-center px-6 py-8 w-24 absolute top-15 -right-12">
          <div className="uppercase text-xl">March</div>
          <div className="text-7xl">14</div>
        </div>
      </div>
      <div className="pt-15">
        <div className="font-condensed text-xl uppercase text-baliHai mb-2">
          <Icon className="float-left mr-4" name="video" />
          Video
        </div>
        <Link href={`blog/${content.slug.current}`}>
          <a>
            <h2 className="font-modern text-6xl highlight">{content.title}</h2>
          </a>
        </Link>
        <br />
        <p className="mt-4 mb-10">{content.postDetails.excerpt}</p>
        <ButtonLink href={`blog/${content.slug.current}`}>
          <Icon className="float-left mr-2" name="arrow" /> Read Article
        </ButtonLink>
      </div>
    </div>
  );
};

export { FullWidthBlogCard };

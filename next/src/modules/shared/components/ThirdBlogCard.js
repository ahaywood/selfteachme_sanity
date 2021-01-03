import Link from "next/link";
import { getPostMonth, getPostDate, getPostYear } from "utils/date";
import Image from "next/image";

const ThirdBlogCard = ({ className, content }) => {
  return (
    <>
      <Link href={`/blog/${content.slug.current}`}>
        <a className={className}>
          <div className="relative flex h-64">
            <img
              className="w-full h-full object-cover absolute top-0 left-0 gap-4"
              src={content.hero}
            />
            <div className="bg-white text-center relative m-2 px-2 py-6 w-full mt-auto">
              <h4 className="font-condensed uppercase text-baliHai text-lg md:text-2xl">
                {content?.postDetails?.datePublished &&
                  getPostMonth(content.postDetails.datePublished)}&nbsp;
              {content?.postDetails?.datePublished &&
                  getPostDate(content.postDetails.datePublished)}
              </h4>
              <h2 className="highlight font-modern text-3xl md:text-4xl">{content.title}</h2>
            </div>
          </div>
        </a>
      </Link>
      <div className="text-center w-full col-span-3 relative md:hidden"><Image src="/img/pluses--horizontal.svg" width="165" height="9" /></div>
    </>
  );
};

export { ThirdBlogCard };

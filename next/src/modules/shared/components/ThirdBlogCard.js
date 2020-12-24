import Link from "next/link";
import { getPostMonth, getPostDate, getPostYear } from "utils/date";

const ThirdBlogCard = ({ content }) => {
  return (
    <Link href={`/blog/${content.slug.current}`}>
      <a>
        <div className="relative flex h-64">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 gap-4"
            src={content.hero}
          />
          <div className="bg-white text-center relative m-2 px-2 py-6 w-full mt-auto">
            <h4 className="font-condensed uppercase text-baliHai text-2xl">
              {content?.postDetails?.datePublished &&
                getPostMonth(content.postDetails.datePublished)}
              {content?.postDetails?.datePublished &&
                getPostDate(content.postDetails.datePublished)}
            </h4>
            <h2 className="highlight font-modern text-4xl">{content.title}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export { ThirdBlogCard };

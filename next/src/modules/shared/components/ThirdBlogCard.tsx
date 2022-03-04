/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getPostMonth, getPostDate } from 'utils/date';
import Image from 'next/image';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  className: string;
  content: SelfTeach.Blog;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ThirdBlogCard = ({ className, content }: Props): JSX.Element => (
  <>
    {content && content?.slug && (
      <Link href={`/blog/${content.slug.current}`}>
        <a className={className}>
          <div className="relative flex h-64">
            <img
              className="w-full h-full object-cover absolute top-0 left-0 gap-4"
              src={content.hero}
              alt={content.title}
            />
            <div className="bg-white text-center relative m-2 px-2 py-6 w-full mt-auto">
              <h4 className="font-condensed uppercase text-baliHai text-lg md:text-2xl">
                {content?.postDetails?.datePublished && getPostMonth(String(content.postDetails.datePublished))}&nbsp;
                {content?.postDetails?.datePublished && getPostDate(String(content.postDetails.datePublished))}
              </h4>
              <h2 className="highlight font-modern text-3xl md:text-4xl">{content.title}</h2>
              {content.subtitle && <h3 className="font-mono text-xl">{content.subtitle}</h3>}
            </div>
          </div>
        </a>
      </Link>
    )}
    <div className="text-center w-full col-span-3 relative md:hidden">
      <Image src="/img/pluses--horizontal.svg" width="165" height="9" />
    </div>
  </>
);

export { ThirdBlogCard };

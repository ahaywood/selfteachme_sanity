import { Hero } from 'modules/shared/components/Hero';
import { FullWidthBlogCard } from 'modules/shared/components/FullWidthBlogCard';
import { EmailNewsletter } from 'modules/shared/components/EmailNewsletter';
import { SubnavBar } from 'modules/shared/components/SubnavBar';
/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Blog[];
  subnavItems?: SelfTeach.Subnav;
}

const BlogPage = ({ content, subnavItems }: Props): JSX.Element => (
  <>
    <div className="content-grid">
      <Hero title="Blog" src="/img/bg__contact.jpg" className="hero" />

      {subnavItems && <SubnavBar subnavItems={subnavItems} />}

      {/* content */}
      <div className="full-width blog-index ping-pong pt-8">
        {content?.map((post) => (
          <div className="stripe" key={post._id}>
            <FullWidthBlogCard buttonStyle="tertiary" content={post} />
            <hr className="my-20 bg-horizontalPluses bg-no-repeat h-4 bg-center mx-auto max-w-6xl border-none" />
          </div>
        ))}
      </div>

      {/* pagination */}
    </div>
    <div>
      <EmailNewsletter />
    </div>
  </>
);

export { BlogPage };

import { Hero } from 'modules/shared/components/Hero';
import { FullWidthBlogCard } from 'modules/shared/components/FullWidthBlogCard';
import { EmailNewsletter } from 'modules/shared/components/EmailNewsletter';
import { Subnav } from 'modules/shared/components/Subnav';

const CategoryPage = ({ content }) => (
  <>
    <div className="content-grid">
      <Hero title="Blog" src="/img/bg__contact.jpg" className="hero" />
      <Subnav />
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

export { CategoryPage };

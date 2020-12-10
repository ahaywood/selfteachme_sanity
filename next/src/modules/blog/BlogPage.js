import { Hero } from "modules/shared/components/Hero";
import { FullWidthBlogCard } from "modules/shared/components/FullWidthBlogCard";
import { Subnav } from "modules/shared/components/Subnav";

const BlogPage = (props) => {
  const { content } = props;

  return (
    <div className="content-grid">
      <Hero title="Blog" src="/img/bg__contact.jpg" className="hero" />
      <Subnav />
      <div className="full-width blog-index ping-pong pt-8">
        {content?.map((post) => {
          return (
            <div className="stripe" key={post._id}>
              <FullWidthBlogCard buttonStyle="tertiary" content={post} />
              <hr className="my-20 bg-transparent border-t-4 border-almostWhite mx-auto max-w-6xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { BlogPage };

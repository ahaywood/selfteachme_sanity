import Image from 'next/image';
import { FullWidthBlogCard } from './FullWidthBlogCard';
import { ThirdBlogCard } from './ThirdBlogCard';
import { ButtonLink } from './ButtonLink';

const LatestPosts = ({ latestPosts }) => (
  <div className="latest-posts bg-almostWhite relative pt-20 pb-16">
    <div className="container md:max-w-max lg:container mx-auto">
      <h2 className="text-center font-handwriting text-6xl md:text-8xl absolute -top-4 w-full left-0">Latest Posts</h2>
      {latestPosts && (
        <>
          <FullWidthBlogCard content={latestPosts.slice(0, 1)[0]} />
          <div className="text-center w-full col-span-3 relative md:hidden mb-8">
            <Image src="/img/pluses--horizontal.svg" width="165" height="9" />
          </div>
        </>
      )}
      <div className="grid grid-cols-3 gap-6">
        {latestPosts &&
          latestPosts
            .slice(1, 4)
            .map((post) => <ThirdBlogCard className="col-span-3 md:col-span-1 mb-0" content={post} key={post._id} />)}
      </div>
      <div className="text-center mt-12 w-full">
        <ButtonLink className="alt" href="/blog">
          <span role="img" aria-label="nerd" className="mx-2">
            🤓
          </span>
          Read all Blog Posts
          <span role="img" aria-label="nerd" className="mx-2">
            🤓
          </span>
        </ButtonLink>
      </div>
    </div>
  </div>
);

export { LatestPosts };

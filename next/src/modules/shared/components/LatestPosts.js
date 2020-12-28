import { useState, useEffect } from "react";
import client from "utils/client";
import groq from "groq";
import { FullWidthBlogCard } from "./FullWidthBlogCard";
import { ThirdBlogCard } from "./ThirdBlogCard";
import { ButtonLink } from "./ButtonLink";

const LatestPosts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const query = groq`*[_type == "post" && postDetails.published == true]{_id, title, slug, "hero": hero.asset->url, video, postDetails, "category": postDetails.category->name, "categorySlug": postDetails.category->slug}[0...4]`;
    client.fetch(query).then((res) => setPosts(res));
  }, []);

  return (
    <div className="latest-posts bg-almostWhite relative pt-20 pb-16">
      <div className="container mx-auto">
        <h2 className="text-center font-handwriting text-8xl absolute -top-4 w-full left-0">
          Latest Posts
        </h2>
        {posts && <FullWidthBlogCard content={posts.slice(0, 1)[0]} />}
        <div className="grid grid-cols-3 gap-6">
          {posts &&
            posts
              .slice(1, 4)
              .map((post) => <ThirdBlogCard content={post} key={post._id} />)}
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
};

export { LatestPosts };

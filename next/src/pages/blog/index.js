import { useEffect, useState } from "react";
import Head from "next/head";
import client from "utils/client";
import groq from "groq";
import { Page } from "modules/shared/layout/Page";
import { BlogPage } from "modules/blog/";

const Blog = (props) => {
  const [content, setContent] = useState();

  useEffect(() => {
    const query = groq`*[_type == "post" && postDetails.published == true]{_id, title, slug, "hero": hero.asset->url, postDetails, "category": postDetails.category->name, "categorySlug": postDetails.category->slug}[0...4]`;
    client.fetch(query).then((res) => setContent(res));
  }, []);

  return (
    <>
      <Head>
        <title>SelfTeach.me | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <BlogPage content={content} />
      </Page>
    </>
  );
};

export default Blog;

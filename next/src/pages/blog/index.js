import { useEffect, useState } from "react";
import Head from "next/head";
import client from "utils/client";
import groq from "groq";
import { Page } from "modules/shared/layout/Page";
import { BlogPage } from "modules/blog/";
import { Constants } from "utils/constants";
import { PaginationForIndex } from "modules/shared/components/PaginationForIndex";

const Blog = (props) => {
  const content = Object.values(props);
  return (
    <>
      <Head>
        <title>SelfTeach.me | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <BlogPage content={content} />
        <PaginationForIndex
          section="blog"
          previousPageNumber="2"
        />
      </Page>
    </>
  );
};

const query = groq`*[_type == "post" && postDetails.published == true] | order(postDetails.datePublished)  {
    _id,
    title,
    slug,
    "hero": hero.asset->url,
    titleWithinHero,
    postDetails,
    "category": postDetails.category->name,
    "categorySlug": postDetails.category->slug
  }[0...$endingNumber]`;

Blog.getInitialProps = async function (context) {
  const endingNumber = Constants.PER_PAGE;
  return await client.fetch(query, { endingNumber });
}

export default Blog;

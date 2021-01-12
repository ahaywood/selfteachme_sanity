import { useEffect, useState } from "react";
import Head from "next/head";
import client from "utils/client";
import groq from "groq";
import { Page } from "modules/shared/layout/Page";
import { BlogPage } from "modules/blog/";
import { Constants } from "utils/constants";
import { Meta } from "modules/shared/header/Meta";

const Blog = (props) => {
  const content = Object.values(props);
  const meta = {
    // "seoDescription" : ,
    "ogTitle": "SelfTeach.me Blog",
    // "ogDescription" : ,
    // "ogImage" : ,
    "twitterTitle": "SelfTeach.me Blog",
    // "twitterDescription" : ,
    // "twitterImage" : ,
    // "twitterImageAlt" :
  }
  return (
    <>
      <Head>
        <title>Blog | SelfTeach.me</title>
        <Meta meta={meta} slug="blog" />
      </Head>
      <Page>
        <BlogPage content={content} />
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
  }`;

Blog.getInitialProps = async function (context) {
  return await client.fetch(query);
}

export default Blog;

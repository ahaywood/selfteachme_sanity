import React from 'react'
import Head from "next/head";
import client from "utils/client";
import groq from "groq";
import { Page } from "modules/shared/layout/Page";
import { SeriesPage } from "modules/blog/SeriesPage";

const Series = (props) => {
  return (
    <>
      <Head>
        <title>{props.name} | SelfTeach.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <SeriesPage content={props} />
      </Page>
    </>
  )
}

const query = groq`*[_type == "Series" && slug.current == 'git']{
    _id,
    name,
    existingIntroVideo->,
    customIntroVideo,
    customIntroVideo,
    leadMagnet,
		postsAndVideos[]->{
      _id,
      title,
      slug,
      "hero": hero.asset->url,
      postDetails,
      "category": postDetails.category->name,
      "categorySlug": postDetails.category->slug
    }
  }[0]`;

Series.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
}

export default Series

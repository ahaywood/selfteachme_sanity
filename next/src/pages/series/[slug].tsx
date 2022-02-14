import React from 'react';
import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';
import { Page } from 'modules/shared/layout/Page';
import { SeriesPage } from 'modules/blog/SeriesPage';
import { GetServerSideProps } from 'next/types';
import { getClient } from 'lib/sanity.server';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Series;
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Series = ({ content, social }: Props): JSX.Element => (
  <>
    <Head>
      <title>{content.name} | SelfTeach.me</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Page social={social}>
      <SeriesPage content={content} />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const query = groq`*[_type == "Series" && slug.current == $slug]{
    _id,
    name,
    existingIntroVideo->,
    customIntroVideo,
    customIntroVideo,
    leadMagnet,
		postsAndVideos[]->{
      _id,
      title,
      subtitle,
      slug,
      "hero": hero.asset->url,
      postDetails,
      "category": postDetails.category->name,
      "categorySlug": postDetails.category->slug
    }
  }[0]`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // get social
  const social = await getClient().fetch(querySocial);

  // get series content
  const { slug = '' } = context.query;
  const content = await getClient().fetch(query, { slug });

  return { props: { content, social } };
};

export default Series;

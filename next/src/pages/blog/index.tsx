import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';
import { Page } from 'modules/shared/layout/Page';
import { BlogPage } from 'modules/blog/';
import { Meta } from 'modules/shared/header/Meta';
import { getClient } from 'lib/sanity.server';
import { querySocial } from 'queries/querySocial';
import { GetServerSideProps } from 'next/types';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Blog[];
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Blog = ({ content, social }: Props): JSX.Element => {
  const meta = {
    // "seoDescription" : ,
    ogTitle: 'SelfTeach.me Blog',
    // "ogDescription" : ,
    // "ogImage" : ,
    twitterTitle: 'SelfTeach.me Blog',
    // "twitterDescription" : ,
    // "twitterImage" : ,
    // "twitterImageAlt" :
  };
  return (
    <>
      <Head>
        <title>Blog | SelfTeach.me</title>
        <Meta meta={meta} slug="blog" />
      </Head>
      <Page social={social}>
        <BlogPage content={content} />
      </Page>
    </>
  );
};

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const query = groq`*[_type == "post" && postDetails.published == true] | order(postDetails.datePublished desc)  {
    _id,
    title,
    subtitle,
    slug,
    "hero": hero.asset->url,
    titleWithinHero,
    postDetails {
      ...,
      category->{
        name,
        slug
      }
    }
  }`;

export const getServerSideProps: GetServerSideProps = async () => {
  // content
  const content = await getClient().fetch(query);

  // social
  const social = await getClient().fetch(querySocial);
  return { props: { content, social } };
};

export default Blog;

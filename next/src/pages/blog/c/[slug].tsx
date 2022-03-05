import Head from 'next/head';
import groq from 'groq';
import { GetServerSideProps } from 'next/types';

// components
import { Page } from 'modules/shared/layout/Page';
import { CategoryPage } from 'modules/blog/CategoryPage';

// queries
import { querySocial } from 'queries/querySocial';
import { getClient } from 'lib/sanity.server';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  category: {
    name: string;
  };
  content: SelfTeach.Blog[];
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Category = ({ category, content, social }: Props): JSX.Element => (
  <>
    <Head>
      <title>{category?.name} | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <CategoryPage content={content} />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const queryPostsInCategory = groq`*[_type == "post" && postDetails.published == true && references(* [_type == "category" && slug.current == $slug]._id)]  | order(postDetails.datePublished desc) {
  _id,
  title,
  slug,
  "hero": hero.asset -> url,
  postDetails,
  "category": postDetails.category -> name,
  "categorySlug": postDetails.category -> slug
}`;

const querySingleCategory = groq`*[_type == "category" && slug.current == $slug] {
  name
}[0]`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // params contains the post `slug`.
  // If the route is like /c/marketing, then params.slug is marketing
  const content = await getClient().fetch(queryPostsInCategory, {
    slug: params?.slug ? params.slug : '',
  });

  const category = await getClient().fetch(querySingleCategory, {
    slug: params?.slug ? params.slug : '',
  });

  const social = await getClient().fetch(querySocial);

  // Pass data to the page via props
  return { props: { content, category, social } };
};

export default Category;

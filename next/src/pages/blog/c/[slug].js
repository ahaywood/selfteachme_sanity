import { useEffect, useState } from 'react';
import Head from 'next/head';
import groq from 'groq';
import { getClient } from 'lib/sanity.server';
import { Constants } from 'utils/constants';

// components
import { Page } from 'modules/shared/layout/Page';
import { CategoryPage } from 'modules/blog/CategoryPage';

// queries
import { queryAllCategories } from 'queries/queryCategories';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Category = ({ category, content }) => (
  <>
    <Head>
      <title>{category?.name} | SelfTeach.me</title>
    </Head>
    <Page>
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

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const allCategories = await getClient().fetch(queryAllCategories);

  // Get the paths we want to pre-render based on posts
  const paths = allCategories.map((category) => ({
    params: { slug: category.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `slug`.
  // If the route is like /c/marketing, then params.slug is marketing
  const content = await getClient().fetch(queryPostsInCategory, {
    slug: params.slug,
  });

  const category = await getClient().fetch(querySingleCategory, {
    slug: params.slug,
  });

  console.log(category);

  // Pass data to the page via props
  return { props: { content, category } };
}

export default Category;

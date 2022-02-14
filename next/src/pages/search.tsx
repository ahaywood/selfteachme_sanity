import Head from 'next/head';
import groq from 'groq';
import { useRouter } from 'next/router';
import { Page } from 'modules/shared/layout/Page';
import { SearchPage } from 'modules/search';
import { GetServerSideProps } from 'next/types';
import { getClient } from 'lib/sanity.server';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  search: SelfTeach.Blog[];
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Search = ({ search, social }: Props): JSX.Element => {
  const content = Object.values(search); // convert posts into array
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Search Results for {router.query.keywords} | SelfTeach.me</title>
      </Head>
      <Page social={social}>
        <SearchPage content={content} />
      </Page>
    </>
  );
};

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const query = groq`*[_type == "post" && postDetails.published == true && (title match $keywords || postDetails.excerpt match $keywords || content match $keywords)]  {
  _id,
  title,
  slug,
  "hero": hero.asset->url,
  titleWithinHero,
  postDetails,
  "category": postDetails.category->name,
  "categorySlug": postDetails.category->slug
}`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // get social info
  const social = await getClient().fetch(querySocial);

  // get search content
  const { keywords = '' } = context.query;
  const search = await getClient().fetch(query, { keywords });

  return { props: { search, social } };
};

export default Search;

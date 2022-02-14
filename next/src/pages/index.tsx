import Head from 'next/head';
import { getClient } from 'lib/sanity.server';
import { GetStaticProps } from 'next/types';

// components
import { HomePage } from 'modules/home';
import { Page } from 'modules/shared/layout/Page';

// queries
import { queryLatestPosts } from 'queries/queryPosts';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  latestPosts: SelfTeach.Blog[];
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Home = ({ latestPosts, social }: Props): JSX.Element => (
  <>
    <Head>
      <title>SelfTeach.me</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Page social={social}>
      <HomePage latestPosts={latestPosts} />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
// latest posts

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getClient().fetch(queryLatestPosts);
  const social = await getClient().fetch(querySocial);

  // pass data to the page via props
  return { props: { latestPosts, social } };
};

export default Home;

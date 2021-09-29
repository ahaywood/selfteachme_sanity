import Head from 'next/head';
import { HomePage } from 'modules/home';
import { getClient } from 'lib/sanity.server';
import { Page } from 'modules/shared/layout/Page';

// queries
import { queryLatestPosts } from 'queries/queryPosts';
import { querySocial } from 'queries/querySocial';

const Home = ({ latestPosts, social }) => (
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

export async function getStaticProps({ params }) {
  const latestPosts = await getClient().fetch(queryLatestPosts);
  const social = await getClient().fetch(querySocial);

  // pass data to the page via props
  return { props: { latestPosts, social } };
}

export default Home;

import Head from "next/head";
import { HomePage } from "modules/home";
import { getClient } from 'lib/sanity.server';
import { Page } from "modules/shared/layout/Page";
import { queryLatestPosts } from "queries/queryPosts";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>SelfTeach.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <HomePage {...props} />
      </Page>
    </>
  );
};

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
// latest posts

export async function getStaticProps({ params }) {
  const latestPosts = await getClient().fetch(queryLatestPosts);

  // pass data to the page via props
  return { props: { latestPosts } };
}


export default Home;

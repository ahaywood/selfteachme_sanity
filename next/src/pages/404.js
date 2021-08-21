import Head from "next/head";
import { Page } from "modules/shared/layout/Page";
import { FourOFourPage } from "modules/404"
import { getClient } from 'lib/sanity.server';
import { queryLatestPosts } from "queries/queryPosts";

const FourOhFour = (props) => {
  return (
    <>
      <Head>
        <title>404 | SelfTeach.me</title>
      </Head>
      <Page>
        <FourOFourPage {...props} />
      </Page>
    </>
  );
};

export async function getStaticProps({ params }) {
  const latestPosts = await getClient().fetch(queryLatestPosts);

  // pass data to the page via props
  return { props: { latestPosts } };
}

export default FourOhFour;

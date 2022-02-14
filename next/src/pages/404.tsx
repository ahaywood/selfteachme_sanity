import Head from 'next/head';
import { Page } from 'modules/shared/layout/Page';
import { FourOFourPage } from 'modules/404';
import { getClient } from 'lib/sanity.server';
import { queryLatestPosts } from 'queries/queryPosts';
import { querySocial } from 'queries/querySocial';
import { GetStaticProps } from 'next/types';

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
const FourOhFour = ({ latestPosts, social }: Props): JSX.Element => (
  <>
    <Head>
      <title>404 | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <FourOFourPage latestPosts={latestPosts} />
    </Page>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getClient().fetch(queryLatestPosts);
  const social = await getClient().fetch(querySocial);

  // pass data to the page via props
  return { props: { latestPosts, social } };
};

export default FourOhFour;

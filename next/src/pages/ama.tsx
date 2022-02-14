import Head from 'next/head';
import { AmaPage } from 'modules/ama/AmaPage';
import { Page } from 'modules/shared/layout/Page';
import { GetStaticProps } from 'next/types';
import { getClient } from 'lib/sanity.server';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ama = ({ social }: Props): JSX.Element => (
  <>
    <Head>
      <title>Ask Me Anything | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <AmaPage />
    </Page>
  </>
);

export default ama;

export const getStaticProps: GetStaticProps = async () => {
  const social = await getClient().fetch(querySocial);
  return { props: { social } };
};

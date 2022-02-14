import Head from 'next/head';
import { Page } from 'modules/shared/layout/Page';
import { StartHerePage } from 'modules/startHere';
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
const startHere = ({ social }: Props): JSX.Element => (
  <>
    <Head>
      <title>Start Here | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <StartHerePage />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
export const getStaticProps: GetStaticProps = async () => {
  const social = await getClient().fetch(querySocial);
  return { props: { social } };
};

export default startHere;

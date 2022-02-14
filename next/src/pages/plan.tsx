import Head from 'next/head';
import { Page } from 'modules/shared/layout/Page';
import { PlanPage } from 'modules/plan';
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
const plan = ({ social }: Props): JSX.Element => (
  <>
    <Head>
      <title>Get a Plan | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <PlanPage />
    </Page>
  </>
);

export default plan;

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
export const getStaticProps: GetStaticProps = async () => {
  const social = await getClient().fetch(querySocial);
  return { props: { social } };
};

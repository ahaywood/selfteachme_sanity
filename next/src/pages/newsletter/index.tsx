import Head from 'next/head';
import { NewsletterPage } from 'modules/newsletter';
import { Page } from 'modules/shared/layout/Page';
import { GetServerSideProps } from 'next/types';
import { querySocial } from 'queries/querySocial';
import { getClient } from 'lib/sanity.server';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const newsletter = ({ social }: Props): JSX.Element => (
  <>
    <Head>
      <title>Weekly Newsletter | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <NewsletterPage />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
export const getServerSideProps: GetServerSideProps = async () => {
  const social = await getClient().fetch(querySocial);
  return { props: { social } };
};

export default newsletter;

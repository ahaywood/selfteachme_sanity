import { getClient } from 'lib/sanity.server';
import Head from 'next/head';
import { ContactPage } from 'modules/contact';
import { Page } from 'modules/shared/layout/Page';
import { querySocial } from 'queries/querySocial';
import { GetStaticProps } from 'next/types';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const contact = ({ social }: Props): JSX.Element => (
  <>
    <Head>
      <title>Contact Us | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <ContactPage social={social} />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
// This also gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  const social = await getClient().fetch(querySocial);

  // Pass post data to the page via props
  return { props: { social } };
};

export default contact;

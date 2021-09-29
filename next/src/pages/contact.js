import groq from 'groq';
import { getClient } from 'lib/sanity.server';
import Head from 'next/head';
import { ContactPage } from 'modules/contact';
import { Page } from 'modules/shared/layout/Page';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const contact = ({ social }) => (
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
export async function getStaticProps({ params }) {
  const social = await getClient().fetch(querySocial);

  // Pass post data to the page via props
  return { props: { social } };
}

export default contact;

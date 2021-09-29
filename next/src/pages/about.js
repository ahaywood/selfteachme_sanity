import Head from 'next/head';
import { AboutPage } from 'modules/about';
import { Page } from 'modules/shared/layout/Page';
import groq from 'groq';
import { getClient } from 'lib/sanity.server';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const About = (props) => (
  <>
    <Head>
      <title>About | SelfTeach.me</title>
    </Head>
    <Page>
      <AboutPage {...props} />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
export async function getStaticProps({ params }) {
  const queryBrands = groq`*[_type == "brandsWorkedWith"] | order(order asc){name, "logo": logo.asset->}`;
  const brands = await getClient().fetch(queryBrands);

  // pass data to the page via props
  return { props: { brands } };
}

export default About;

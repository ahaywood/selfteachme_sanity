import Head from 'next/head';
import { AboutPage } from 'modules/about';
import { Page } from 'modules/shared/layout/Page';
import groq from 'groq';
import { getClient } from 'lib/sanity.server';
import { querySocial } from 'queries/querySocial';
import { GetStaticProps } from 'next/types';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  brands: SelfTeach.Brands;
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const About = ({ brands, social }: Props): JSX.Element => (
  <>
    <Head>
      <title>About | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <AboutPage brands={brands} />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
export const getStaticProps: GetStaticProps = async () => {
  // get brands
  const queryBrands = groq`*[_type == "brandsWorkedWith"] | order(order asc){name, "logo": logo.asset->}`;
  const brands = await getClient().fetch(queryBrands);

  // get social
  const social = await getClient().fetch(querySocial);

  // pass data to the page via props
  return { props: { brands, social } };
};

export default About;

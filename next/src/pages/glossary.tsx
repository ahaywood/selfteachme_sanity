import { GlossaryPage } from 'modules/glossary';
import { Page } from 'modules/shared/layout/Page';
import Head from 'next/head';
import groq from 'groq';
import { querySocial } from 'queries/querySocial';
import { getClient } from 'lib/sanity.server';
import { GetStaticProps } from 'next/types';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  glossaryTerms: SelfTeach.Glossary;
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const glossary = ({ glossaryTerms, social }: Props): JSX.Element => (
  <Page social={social}>
    <Head>
      <title>Glossary | SelfTeach.me</title>
    </Head>
    <GlossaryPage glossary={glossaryTerms} />
  </Page>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const queryGlossary = groq`*[_type == "glossary"]  | order(name asc) {
  _id,
  name,
  description
}`;

export const getStaticProps: GetStaticProps = async () => {
  const glossaryTerms = await getClient().fetch(queryGlossary);
  const social = await getClient().fetch(querySocial);

  // Pass post data to the page via props
  return { props: { glossaryTerms, social } };
};

export default glossary;

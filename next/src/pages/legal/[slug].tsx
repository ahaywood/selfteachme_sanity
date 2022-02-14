/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import groq from 'groq';
import { Page } from 'modules/shared/layout/Page';
import { LegalPage } from 'modules/legal';
import { GetServerSideProps } from 'next/types';
import { getClient } from 'lib/sanity.server';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Legal;
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Legal = ({ content, social }: Props): JSX.Element => (
  <div>
    <Head>
      <title>{content.name} | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <LegalPage {...content} />
    </Page>
  </div>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const query = groq`*[_type == "legal" && slug.current == $slug][0]`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // social
  const social = await getClient().fetch(querySocial);

  // legal content
  const { slug = '' } = context.query;
  const content = await getClient().fetch(query, { slug });

  return { props: { content, social } };
};

export default Legal;

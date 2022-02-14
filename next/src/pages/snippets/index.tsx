import Head from 'next/head';
import groq from 'groq';
import { Page } from 'modules/shared/layout/Page';
import { SnippetPage } from 'modules/snippets/';
import { GetServerSideProps } from 'next/types';
import { getClient } from 'lib/sanity.server';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Snippet[];
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Snippets = ({ content, social }: Props): JSX.Element => (
  <>
    <Head>
      <title>Snippets | SelfTeach.me</title>
    </Head>
    <Page social={social}>
      <SnippetPage content={content} />
    </Page>
  </>
);

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const query = groq`*[_type == "codeSnippet" && published == true] {
  _id,
  name,
  slug,
}`;

export const getServerSideProps: GetServerSideProps = async () => {
  const social = await getClient().fetch(querySocial);
  const content = await getClient().fetch(query);
  return { props: { social, content } };
};

export default Snippets;

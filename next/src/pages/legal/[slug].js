import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';

import { Page } from 'modules/shared/layout/Page';
import { LegalPage } from 'modules/legal';

const Legal = (props) => (
  <div>
    <Head>
      <title>SelfTeach.me | {props.name}</title>
    </Head>
    <Page>
      <LegalPage {...props} />
    </Page>
  </div>
);

const query = groq`*[_type == "legal" && slug.current == $slug][0]`;

Legal.getInitialProps = async function (context) {
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Legal;

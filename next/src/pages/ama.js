import Head from 'next/head';
import { AmaPage } from 'modules/ama/AmaPage';
import { Page } from 'modules/shared/layout/Page';

const ama = () => (
  <>
    <Head>
      <title>Ask Me Anything | SelfTeach.me</title>
    </Head>
    <Page>
      <AmaPage />
    </Page>
  </>
);

export default ama;

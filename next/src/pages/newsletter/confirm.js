import Head from 'next/head';
import { NewsletterConfirmPage } from 'modules/newsletter/NewsletterConfirmPage';
import { Page } from 'modules/shared/layout/Page';

const confirm = () => (
  <>
    <Head>
      <title>Compressed: Weekly Newsletter | SelfTeach.me</title>
    </Head>
    <Page>
      <NewsletterConfirmPage />
    </Page>
  </>
);

export default confirm;

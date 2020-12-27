import Head from "next/head";
import { NewsletterPage } from "modules/newsletter";
import { Page } from "modules/shared/layout/Page";

const contact = () => (
  <>
    <Head>
      <title>SelfTeach.me | Compressed: Weekly Newsletter</title>
    </Head>
    <Page>
      <NewsletterPage />
    </Page>
  </>
);

export default contact;

import Head from "next/head";
import { NewsletterPage } from "modules/newsletter";
import { Page } from "modules/shared/layout/Page";

const newsletter = () => (
  <>
    <Head>
      <title>Compressed: Weekly Newsletter | SelfTeach.me</title>
    </Head>
    <Page>
      <NewsletterPage />
    </Page>
  </>
);

export default newsletter;

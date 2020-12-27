import Head from "next/head";
import { ContactPage } from "../modules/contact";
import { Page } from "modules/shared/layout/Page";

const contact = () => (
  <Page>
    <Head>
      <title>SelfTeach.me | Contact Us</title>
    </Head>
    <ContactPage />
  </Page>
);

export default contact;

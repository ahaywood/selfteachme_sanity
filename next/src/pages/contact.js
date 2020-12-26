import Head from "next/head";
import { ContactPage } from "../modules/contact";
import { Page } from "modules/shared/layout/Page";

const contact = () => (
  <>
    <Head>
      <title>SelfTeach.me | About</title>
    </Head>
    <ContactPage />
  </>
);

export default contact;

import Head from "next/head";
import { AboutPage } from "modules/about";
import { Page } from "modules/shared/layout/Page";

const About = () => {
  return (
    <>
      <Head>
        <title>About | SelfTeach.me</title>
      </Head>
      <Page>
        <AboutPage />
      </Page>
    </>
  );
};

export default About;

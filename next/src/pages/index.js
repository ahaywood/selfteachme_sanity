import Head from "next/head";
import { HomePage } from "modules/home";
import { Page } from "modules/shared/layout/Page";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>SelfTeach.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <HomePage />
      </Page>
    </>
  );
};

export default Home;

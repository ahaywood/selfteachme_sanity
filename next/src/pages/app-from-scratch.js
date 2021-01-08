import { Page } from "modules/shared/layout/Page"
import { AppFromScratchPage } from "modules/appFromScratch";
import Head from "next/head";

const appFromScratch = () => {
  return (
    <>
      <Head>
        <title>App from Scratch | SelfTeach.me</title>
      </Head>
      <Page>
        <AppFromScratchPage />
      </Page>
    </>
  );
};

export default appFromScratch;

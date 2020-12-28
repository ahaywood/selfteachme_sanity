import Head from "next/head";
import { Page } from "modules/shared/layout/Page";
import { StartHerePage } from "modules/startHere";

const startHere = () => {
  return (
    <>
      <Head>
        <title>SelfTeach.me | Start Here</title>
      </Head>
      <Page>
        <StartHerePage />
      </Page>
    </>
  );
};

export default startHere;

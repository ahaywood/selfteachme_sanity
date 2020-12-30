import Head from "next/head";
import { Page } from "modules/shared/layout/Page";
import { StartHerePage } from "modules/startHere";

const startHere = () => {
  return (
    <>
      <Head>
        <title>Start Here | SelfTeach.me</title>
      </Head>
      <Page>
        <StartHerePage />
      </Page>
    </>
  );
};

export default startHere;

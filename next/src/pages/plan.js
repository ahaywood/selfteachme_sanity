import Head from "next/head";
import { Page } from "modules/shared/layout/Page";
import { PlanPage } from "modules/plan";

const plan = () => {
  return (
    <>
      <Head>
        <title>SelfTeach.me | Get a Plan</title>
      </Head>
      <Page>
        <PlanPage />
      </Page>
    </>
  );
};

export default plan;

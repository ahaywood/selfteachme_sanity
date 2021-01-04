import Head from "next/head";
import { Page } from "modules/shared/layout/Page";
import { FourOFourPage } from "modules/404"

const FourOhFour = () => {
  return (
    <>
      <Head>
        <title>404 | SelfTeach.me</title>
      </Head>
      <Page>
        <FourOFourPage />
      </Page>
    </>
  );
};

export default FourOhFour;

import Head from "next/head";
import { Page } from "modules/shared/layout/Page"
import { CssAdvancedBeginnerPage } from "modules/cssAdvancedBeginner";

const cssAdvancedBeginner = () => {
  return (
    <>
      <Head>
        <title>CSS Advanced Beginner to Expert | SelfTeach.me</title>
      </Head>
      <Page>
        <CssAdvancedBeginnerPage />
      </Page>
    </>
  );
};

export default cssAdvancedBeginner;

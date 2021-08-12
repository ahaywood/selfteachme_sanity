import { GlossaryPage } from "modules/glossary";
import { Page } from "modules/shared/layout/Page";
import client from "utils/client";
import Head from "next/head";
import groq from "groq";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const glossary = (props) => {
  const { glossary } = props;
  return (
    <Page>
      <Head>
        <title>Glossary | SelfTeach.me</title>
      </Head>
      <GlossaryPage glossary={glossary} />
    </Page>
  )
}

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
const queryGlossary = groq`*[_type == "glossary"]  | order(name asc) {
  _id,
  name,
  description
}`;

export async function getStaticProps() {
  const glossary = await client.fetch(queryGlossary);

  // Pass post data to the page via props
  return { props: { glossary } }

  return {
    props: {}, // will be passed to the page component as props
  }
}



export default glossary


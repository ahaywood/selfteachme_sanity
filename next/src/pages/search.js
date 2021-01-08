import Head from "next/head";
import client from "utils/client";
import groq from "groq";
import { useRouter } from "next/router";
import { Page } from "modules/shared/layout/Page";
import { SearchPage } from "modules/search";

const Search = (props) => {
  const content = Object.values(props); // convert posts into array
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Search Results for {router.query.keywords} | SelfTeach.me</title>
      </Head>
      <Page>
        <SearchPage content={content} />
      </Page>
    </>
  )
}

const query = groq`*[_type == "post" && postDetails.published == true && (title match $keywords || postDetails.excerpt match $keywords || content match $keywords)]  {
  _id,
  title,
  slug,
  "hero": hero.asset->url,
  titleWithinHero,
  postDetails,
  "category": postDetails.category->name,
  "categorySlug": postDetails.category->slug
}`;

Search.getInitialProps = async function (context) {
  console.log(`Query ${context.query}`);
  const { keywords = "" } = context.query;
  return await client.fetch(query, { keywords });
}

export default Search;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import client from "utils/client";
import groq from "groq";
import { Page } from "modules/shared/layout/Page";
import { BlogPage } from "modules/blog/";
import { Constants } from "utils/constants";
import { PaginationForIndex } from "modules/shared/components/PaginationForIndex";

const Blog = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const currentPageNumber = Number(slug);

  const [totalPosts, setTotalPosts] = useState();
  const [previousPageNumber, setPreviousPageNumber] = useState(currentPageNumber > 1 ? currentPageNumber - 1 : '');
  const [nextPageNumber, setNextPageNumber] = useState(currentPageNumber + 1);
  const numberPerPage = Constants.PER_PAGE;
  const content = Object.values(props);

  useEffect(() => {
    const query = groq`*[_type == "post" && postDetails.published == true]{}`;
    client.fetch(query).then((res) => {
      setTotalPosts(res.length)
    });
  }, [])

  useEffect(() => {
    const startingNumber = Number(slug) * numberPerPage;
    const endingNumber = startingNumber + numberPerPage;
    console.log({ startingNumber, endingNumber });

    if ((startingNumber >= totalPosts) && (totalPosts <= endingNumber)){
      console.log('no pages left');
    }
  }, [totalPosts, router.query]);

  return (
    <>
      <Head>
        <title>SelfTeach.me | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <BlogPage content={content} />
        <PaginationForIndex
          section="blog"
          previousPageNumber={previousPageNumber}
          nextPageNumber={nextPageNumber}
        />
      </Page>
    </>
  );
};

Blog.getInitialProps = async function (context) {
  const query = groq`*[_type == "post" && postDetails.published == true]{
    _id,
    title,
    slug,
    "hero": hero.asset->url,
    postDetails,
    "category": postDetails.category->name,
    "categorySlug": postDetails.category->slug
  }[$startingNumber...$endingNumber]`;

  const numberPerPage = Constants.PER_PAGE;
  const { slug = '' } = context.query;
  const startingNumber = (Number(slug) - 1) * numberPerPage;
  const endingNumber = startingNumber + numberPerPage;
  return await client.fetch(query,{ startingNumber, endingNumber});
}

export default Blog;

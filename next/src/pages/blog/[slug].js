import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import { getClient } from 'lib/sanity.server';
import { Page } from "modules/shared/layout/Page";
import { IndividualBlog } from "modules/blog/IndividualBlog";
import { Meta } from "modules/shared/header/Meta";
import { queryIndividualPost, queryAllPosts } from "queries/queryPosts";

const Post = (props) => {
  const { post } = props;
  return (
    <div>
      <Head>
        {post?.meta && (<title>{post.meta.seoTitle && `${post.meta.seoTitle} | `}SelfTeach.me</title>)}
        {(post?.meta && post?.slug) && (<Meta meta={post.meta} slug={`blog/${post.slug.current}`} />)}
      </Head>
      <Page>
        <IndividualBlog {...props} />
      </Page>
    </div>
  );
};


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const allPosts = await getClient().fetch(queryAllPosts);

  // Get the paths we want to pre-render based on posts
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug.current },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const post = await getClient().fetch(queryIndividualPost, { slug: params.slug });

  // Pass post data to the page via props
  return { props: { post } }
}



// Post.getInitialProps = async function (context) {
//   const { slug = "" } = context.query;
//   return await client.fetch(queryIndividualPost, { slug });
// };

export default Post;

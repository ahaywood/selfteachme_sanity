/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { getClient } from 'lib/sanity.server';
import { Page } from 'modules/shared/layout/Page';
import { IndividualBlog } from 'modules/blog/IndividualBlog';
import { Meta } from 'modules/shared/header/Meta';
import { queryIndividualPost } from 'queries/queryPosts';
import { GetServerSideProps } from 'next/types';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  post: SelfTeach.Blog;
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Post = ({ post, social }: Props): JSX.Element => (
  <div>
    <Head>
      {post?.meta && <title>{post.meta.seoTitle && `${post.meta.seoTitle} | `}SelfTeach.me</title>}
      {post?.meta && post?.slug && <Meta meta={post.meta} slug={`blog/${post.slug.current}`} />}
    </Head>
    <Page social={social}>
      <IndividualBlog post={post} />
    </Page>
  </div>
);

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const post = await getClient().fetch(queryIndividualPost, { slug: params.slug });

  // get social
  const social = await getClient().fetch(querySocial);

  // Pass post data to the page via props
  return { props: { post, social } };
};

export default Post;

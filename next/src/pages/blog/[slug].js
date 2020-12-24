import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import client from "utils/client";
import groq from "groq";
import { Page } from "modules/shared/layout/Page";
import { IndividualBlog } from "modules/blog/IndividualBlog";

const Post = (props) => {
  return (
    <div>
      <Head>
        <title>SelfTeach.me | {props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <IndividualBlog {...props} />
      </Page>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug]{
  ...,
  "hero": hero.asset->url,
  content[]{
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "internalSection": @.reference->_type,
        "slug": @.reference->slug
      },
    },
    _type == "fullWidthImage" => {
      "imageUrl": @.actualImage.asset->{url}
    }
  }
}[0]`;

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;

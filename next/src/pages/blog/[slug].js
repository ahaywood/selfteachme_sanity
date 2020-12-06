import Head from "next/head";
const BlockContent = require("@sanity/block-content-to-react");
import client from "utils/client";
import groq from "groq";
import { serializers } from "modules/shared/blockContent/Serializers";

const Post = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{props.title}</h1>
      <BlockContent blocks={props.content} serializers={serializers} />
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug]{
  ...,
  content[]{
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "internalSection": @.reference->_type,
        "slug": @.reference->slug
      },
    },
    asset->{url}
  }
}[0]`;

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;

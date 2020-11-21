import Head from "next/head";
import client from "../../utils/client";
import groq from "groq";

const Post = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{props.title}</h1>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]`;

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;

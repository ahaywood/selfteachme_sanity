import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import client from "utils/client";
import groq from "groq";
import { Page } from "modules/shared/layout/Page";
import { IndividualBlog } from "modules/blog/IndividualBlog";
import { Meta } from "modules/shared/header/Meta";

const Post = (props) => {
  return (
    <div>
      <Head>
        <title>{props.meta?.seoTitle && `${props.meta.seoTitle} | `}SelfTeach.me</title>
        <Meta meta={props.meta} slug={`blog/${props.slug.current}`} />
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
  relatedPosts[]->{_id, title, slug},
  blogPagination{
    nextPost->{
      title,
      slug,
      "datePublished": postDetails.datePublished,
      "dateUpdated": postDetails.dateUpdated,
		},
    previousPost->{
      title,
      slug,
      "datePublished": postDetails.datePublished,
      "dateUpdated": postDetails.dateUpdated,
		},
	},
  meta{
    ...,
    "ogImage": ogImage.asset->url,
    "twitterImage": twitterImage.asset->url
  },
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
    },
    _type == "tableOfContents" => {
      table[]{
        ...,
        link->{slug, _type}
      }
    }
  }
}[0]`;

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;

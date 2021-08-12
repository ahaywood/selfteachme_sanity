import groq from "groq";

const queryIndividualPost = groq`*[_type == "post" && slug.current == $slug]{
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
    // _type == "tableOfContents" => {
      // table[]{
      //   ...,
      //   link->{slug, _type}
      // }
    // }
  }
}[0]`;

const queryAllPosts = groq`*[_type == "post"]{
  slug
}`;


export { queryIndividualPost, queryAllPosts };
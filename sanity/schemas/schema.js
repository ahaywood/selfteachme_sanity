// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// custom schemas
// import bigNumbers from "./bigNumbers";
import blockContent from "./blockContent/blockContent";
import blockquote from "./blockContent/blockquote";
import box from "./blockContent/box";
import codepen from "./blockContent/codepen";
import fullWidthImage from "./blockContent/fullWidthImage";
import imageText from "./blockContent/imageText";
import leadMagnet from "./blockContent/leadMagnet";
import youtube from "./blockContent/youtube";
import tableOfContents from "./blockContent/tableOfContents";
import timecode from "./blockContent/timecode";
import twoColumnText from "./blockContent/twoColumnText";
import horizontalDivider from "./blockContent/horizontalDivider";

// field groups
import postDetails from "./objects/postDetails";
import postMeta from "./objects/postMeta";
import blogPagination from "./objects/blogPagination";
import customIntroVideo from "./objects/customIntroVideo";
import affiliateButton from "./objects/affiliateButton";
import originallyPosted from "./objects/originallyPosted";

// custom documents
import almanac from "./documents/almanac";
import ama from "./documents/ama";
import brandsWorkedWith from "./documents/brandsWorkedWith";
import category from "./documents/postCategory";
import codeSnippet from "./documents/codeSnippet";
import glossary from "./documents/glossary";
import guides from "./documents/guides";
import landingPage from "./documents/landingPage";
import legal from "./documents/legal";
import livestream from "./documents/livestream";
import newsletter from "./documents/newsletter";
import post from "./documents/post";
import resources from "./documents/resources";
import series from "./documents/series";
import snippetCategory from "./documents/snippetCategory";
import socialMedia from "./documents/socialMedia";
import use from "./documents/use";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* block content */
    blockContent,
    blockquote,
    box,
    codepen,
    fullWidthImage,
    imageText,
    leadMagnet,
    youtube,
    tableOfContents,
    timecode,
    twoColumnText,
    horizontalDivider,

    /* documents */
    almanac,
    ama,
    brandsWorkedWith,
    category,
    codeSnippet,
    glossary,
    guides,
    landingPage,
    legal,
    livestream,
    newsletter,
    post,
    resources,
    series,
    snippetCategory,
    socialMedia,
    use,

    /* objects */
    postDetails,
    postMeta,
    blogPagination,
    customIntroVideo,
    affiliateButton,
    originallyPosted
  ]),
});

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
    /* Your types here! */
    affiliateButton,
    almanac,
    ama,
    // bigNumbers,
    blockquote,
    blockContent,
    blogPagination,
    box,
    brandsWorkedWith,
    category,
    codepen,
    codeSnippet,
    customIntroVideo,
    fullWidthImage,
    glossary,
    guides,
    horizontalDivider,
    landingPage,
    leadMagnet,
    livestream,
    legal,
    newsletter,
    post,
    postDetails,
    postMeta,
    resources,
    series,
    snippetCategory,
    socialMedia,
    tableOfContents,
    timecode,
    twoColumnText,
    use,
    youtube,
  ]),
});

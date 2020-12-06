// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// custom schemas
import blockContent from "./blockContent";
import box from "./box";
import codepen from "./codepen";
import fullWidthImage from "./fullWidthImage";
import youtube from "./youtube";
import tableOfContents from "./tableOfContents";
import timecode from "./timecode";
import twoColumnText from "./twoColumnText";

// field groups
import postDetails from "./postDetails";
import postMeta from "./postMeta";
import customIntroVideo from "./customIntroVideo";
import affiliateButton from "./affiliateButton";

// custom documents
import almanac from "./almanac";
import ama from "./ama";
import brandsWorkedWith from "./brandsWorkedWith";
import category from "./postCategory";
import codeSnippet from "./codeSnippet";
import glossary from "./glossary";
import landingPage from "./landingPage";
import legal from "./legal";
import livestream from "./livestream";
import podcast from "./podcast";
import post from "./post";
import series from "./series";
import snippetCategory from "./snippetCategory";
import socialMedia from "./socialMedia";
import use from "./use";

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
    box,
    blockContent,
    brandsWorkedWith,
    category,
    codepen,
    codeSnippet,
    customIntroVideo,
    fullWidthImage,
    glossary,
    landingPage,
    livestream,
    legal,
    podcast,
    post,
    postDetails,
    postMeta,
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

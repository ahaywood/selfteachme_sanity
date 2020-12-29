import React from 'react'
import client from "utils/client";
import groq from "groq";

const Search = (props) => {
  return (
    <div>
      Searching...
    </div>
  )
}

const query = groq`*[_type == "post" && postDetails.published == true && (title match "terminal" || text match "terminal")]  {
  _id,
  title,
  slug,
  "hero": hero.asset->url,
  titleWithinHero,
  postDetails,
  "category": postDetails.category->name,
  "categorySlug": postDetails.category->slug
}`;

Search.getInitialProps = async function (context) {
  // const endingNumber = Constants.PER_PAGE;
  return await client.fetch(query);
}

export default Search

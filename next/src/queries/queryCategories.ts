import groq from 'groq';

const queryAllCategories = groq`*[_type == "category" && published == true]{
  _id,
  name,
  slug,
}`;

export { queryAllCategories };

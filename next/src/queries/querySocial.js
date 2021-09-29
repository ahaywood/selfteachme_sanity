import groq from 'groq';

const querySocial = groq`*[_type == "socialMedia"][0]`;

export { querySocial };

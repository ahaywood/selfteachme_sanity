// reference: https://dev.to/emil_priver/sitemap-with-nextjs-after-9-4-update-2bfl
// TODO: add legal pages, series, and snippets

// import functions from the package
import type { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { getClient } from 'lib/sanity.server';
import groq from 'groq';
import globby from 'globby';

// get static pages inside pages directory
const getPages = async () => {
  const pages = await globby([
    // include
    'src/pages/*.js',
    // exclude
    '!src/pages/_*.js',
  ]);
  return pages;
};

// format the page path (removes src/pages/)
const formatPagePath = (page) => page.replace('src/pages/', '');

// query for all the blog posts
const getPosts = async function () {
  const blogPostQuery = groq`*[_type == "post" && postDetails.published == true] | order(postDetails.datePublished)  {
    _id,
    title,
    "publishDate": postDetails.datePublished,
    "updatedDate": postDetails.dateUpdated,
    slug,
  }`;

  return getClient().fetch(blogPostQuery);
};

// build the sitemap
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const pages = await getPages();
  const posts = await getPosts();

  // Create the a stream to write to with a hostname which will be used for all links
  // Your are able to add more settings to the stream. I recommend to look a the npm package for more information.
  const smStream = new SitemapStream({
    hostname: 'https://selfteach.me',
  });
  // Add frontpage
  smStream.write({
    url: '/',
  });
  // Add a static url to ex: blog index page
  smStream.write({
    url: '/blog',
    changefreq: 'daily',
  });

  // add all static pages from the pages directory
  pages.forEach((element) => {
    smStream.write({
      url: `/${formatPagePath(element)}`,
      changefreq: 'monthly',
    });
  });

  // add all dynamic blog post urls
  posts.forEach((element) => {
    smStream.write({
      url: `/blog/${element.slug.current}`,
      lastmod: element.updatedDate ? element.updatedDate : element.publishDate,
      changefreq: 'weekly',
    });
  });
  // tell sitemap that there is nothing more to add to the sitemap
  smStream.end();
  // generate a sitemap and add the XML feed to a url which will be used later on.
  const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());
  // here is the generation of the sitemap happening
  // tell the output that we will output XML
  res.setHeader('Content-Type', 'text/xml');
  // write the generate sitemap to the output
  res.write(sitemap);
  // end and send the data to the user or service.
  res.end();
};

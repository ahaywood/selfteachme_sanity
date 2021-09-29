import { useEffect, useState } from 'react';
import Head from 'next/head';
import client from 'utils/client';
import groq from 'groq';
import { Page } from 'modules/shared/layout/Page';
import { SnippetPage } from 'modules/snippets/';
import { Constants } from 'utils/constants';

const Snippets = (props) => {
  const { content } = props;
  return (
    <Page>
      <SnippetPage content={content} />
    </Page>
  );
};

const query = groq`*[_type == "codeSnippet" && published == true] {
  _id,
  name,
  slug,
}`;

Snippets.getInitialProps = async function (context) {
  return await client.fetch(query);
};

export default Snippets;

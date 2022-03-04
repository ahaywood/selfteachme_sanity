import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Page } from 'modules/shared/layout/Page';
import { FourOFourPage } from 'modules/404';
import { getClient } from 'lib/sanity.server';
import { queryLatestPosts } from 'queries/queryPosts';
import { querySocial } from 'queries/querySocial';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const FourOhFour = (): JSX.Element => {
  const [latestPosts, setLatestPosts] = useState<SelfTeach.Blog[]>();
  const [social, setSocial] = useState<SelfTeach.Social>();

  const getContent = async () => {
    const tLatestPosts = await getClient().fetch(queryLatestPosts);
    setLatestPosts(tLatestPosts);

    const tSocial = await getClient().fetch(querySocial);
    setSocial(tSocial);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <Head>
        <title>404 | SelfTeach.me</title>
      </Head>
      <Page social={social}>
        <FourOFourPage latestPosts={latestPosts} />
      </Page>
    </>
  );
};

export default FourOhFour;

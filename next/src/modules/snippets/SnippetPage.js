import { Hero } from 'modules/shared/components/Hero';
import { OneSnippet } from './components/OneSnippet';
import { Subnav } from './components/Subnav';

const SnippetPage = (props) => {
  const { content } = props;
  return (
    <>
      <Hero title="Snippets" src="/img/bg__about.jpg" />
      <Subnav />
      <div className="">
        {content?.map((snippet) => (
          <OneSnippet content={snippet} />
        ))}
      </div>
    </>
  );
};

export { SnippetPage };

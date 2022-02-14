import { Hero } from 'modules/shared/components/Hero';
import { OneSnippet } from './components/OneSnippet';
import { Subnav } from './components/Subnav';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  content: SelfTeach.Snippet[];
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SnippetPage = ({ content }: Props): JSX.Element => (
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

export { SnippetPage };

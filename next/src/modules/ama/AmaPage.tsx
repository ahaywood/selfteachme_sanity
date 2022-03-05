import { Hero } from 'modules/shared/components/Hero';
import { AmaForm } from './components/AmaForm';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const AmaPage = (): JSX.Element => (
  <>
    <div className="content-grid move-content-up">
      <Hero title="Ask Me Anything" src="/img/bg__contact.jpg" className="hero" subtitle="" />
      <div className="main md:p-12 px-8 sm:px-0">
        <AmaForm />
      </div>
    </div>
  </>
);

export { AmaPage };

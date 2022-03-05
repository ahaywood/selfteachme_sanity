import { Hero } from 'modules/shared/components/Hero';
import { ContactForm } from './components/ContactForm';
import { ElsewhereOnline } from './components/ElsewhereOnline';
import { Map } from './components/Map';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ContactPage = ({ social }: Props): JSX.Element => (
  <>
    <div className="content-grid move-content-up">
      <Hero title="Contact" src="/img/bg__contact.jpg" className="hero" />
      <div className="main md:p-12 px-8 sm:px-0">
        <div className="flex lg:items-center flex-col lg:flex-row pt-2 sm:pt-0">
          <h2 className="font-handwriting text-7xl md:text-8xl lg:text-7xl xl:text-8xl mr-2 relative md:top-2 lg:top-0">
            Leave a Note
          </h2>
          <h3 className="font-condensed text-brightPink uppercase text-2xl md:text-3xl bg-underline bg-left-bottom bg-no-repeat pb-6 pr-12">
            Everything starts with a hello
          </h3>
        </div>
        <p className="large-body-copy mb-10">
          Whether it’s a question, comment, support issue, praise, constructive criticism, short story, or musical
          anecdote, I’d love to hear from you.
        </p>
        <ContactForm />
      </div>
    </div>
    <Map />
    <ElsewhereOnline social={social} />
  </>
);

export { ContactPage };

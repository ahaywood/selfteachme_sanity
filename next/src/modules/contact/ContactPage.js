import { Page } from "modules/shared/layout/Page";
import { Hero } from "modules/shared/components/Hero";
import { ContactForm } from "./components/ContactForm";
import { ElsewhereOnline } from "./components/ElsewhereOnline";
import { Map } from "./components/Map";

const ContactPage = () => {
  return (
    <Page>
      <div className="content-grid move-content-up">
        <Hero title="Contact" src="/img/bg__contact.jpg" className="hero" />
        <div className="main">
          <div className="flex items-center">
            <h2 className="font-handwriting text-8xl mr-2">Leave a Note</h2>
            <h3 className="font-condensed text-brightPink uppercase text-3xl bg-underline bg-left-bottom bg-no-repeat pb-6 pr-12">
              Everything starts with a hello
            </h3>
          </div>
          <p className="large-body-copy mb-10">
            Whether it’s a question, comment, support issue, praise,
            constructive criticism, short story, or musical anecdote, I’d love
            to hear from you.
          </p>
          <ContactForm />
        </div>
      </div>
      <Map />
      <ElsewhereOnline />
    </Page>
  );
};

export { ContactPage };

import { Hero } from 'modules/shared/components/Hero';
import { EmailNewsletter } from 'modules/shared/components/EmailNewsletter';

const NewsletterPage = (): JSX.Element => (
  <div className="content-grid">
    <Hero title="WEEKLY DOWNLOAD" subtitle="Newsletter" src="/img/bg__about.jpg" />
    <EmailNewsletter className="col-span-3" />
    <div>
      <h3 className="uppercase font-condensed text-brightPink">I promise never to spam you</h3>
    </div>
  </div>
);

export { NewsletterPage };

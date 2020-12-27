import { Hero } from "modules/shared/components/Hero";
import { EmailNewsletter } from "modules/shared/components/EmailNewsletter";

const NewsletterPage = () => {
  return (
    <div className="content-grid">
      <Hero title="COMPRESSED" subtitle="Weekly Newsletter" src="/img/bg__about.jpg" />
      <EmailNewsletter className="col-span-3" />
      <div>
        <h3 className="uppercase font-condensed text-brightPink">I promise never to spam you</h3>
      </div>
    </div>
  )
}

export { NewsletterPage }

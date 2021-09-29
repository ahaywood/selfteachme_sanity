import { Hero } from 'modules/shared/components/Hero';

const NewsletterConfirmPage = () => (
  <div className="content-grid">
    <Hero title="COMPRESSED" subtitle="Weekly Newsletter" src="/img/bg__about.jpg" />
    <div className="md:p-12 px-8 sm:px-0 text-center col-start-2">
      <h2 className="font-condensed text-5xl text-brightPink uppercase">TWO STEPS TO CONFIRM YOUR SUBSCRIPTION</h2>
    </div>
    {/* #1 */}
    <div className="flex col-start-2">
      <div className="">1</div>
      <div className="flex-1">
        <h3 className="font-sans text-xl font-bold">
          We just sent you an email.
          <br />
          Please click on the confirmation included.
        </h3>
      </div>
    </div>
    <div className="col-span-3">{/* image */}</div>
    <div className="col-start-2">
      <p>Once you do that, we’ll send a follow-up email that includes everything you need to know.</p>
    </div>
    {/* #2 */}
    <div className="flex col-start-2">
      <div className="">2</div>
      <div className="flex-1">
        <h3 className="font-sans text-xl font-bold">Add hello@selfteach.me to your contact list.</h3>
        <p>This step is important (especially if you use Gmail) and want our emails to end up in the right place.</p>
      </div>
    </div>
    <div className="text-center col-start-2 mb-16">
      <h3 className="font-condensed text-5xl leading-stacked text-brightPink uppercase">OK, NOW OFF TO YOUR INBOX.</h3>
      <h3 className="font-condensed text-5xl leading-stacked text-black uppercase">I’LL SEE YOU SOON.</h3>
    </div>
  </div>
);

export { NewsletterConfirmPage };

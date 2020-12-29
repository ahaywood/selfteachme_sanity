import { EmailNewsletter } from "modules/shared/components/EmailNewsletter";
import { Hero } from "modules/shared/components/Hero";
import { getAge } from "utils/date"
import { Constants } from "utils/constants";
import { LogoGrid } from "modules/about/components/LogoGrid";

const AboutPage = () => {

  const kidsAge = (kid) => {
    switch (kid) {
      case 'isaac':
        return getAge(Constants.ISAACS_BDAY);
        break;
      case 'adele':
        return getAge(Constants.ADELES_BDAY);
        break;
      case 'emma':
        return getAge(Constants.EMMAS_BDAY);
        break;
      default:
        return;
    }
  }

  return (
    <div className="content-grid move-content-up">
      <Hero title="About" src="/img/bg__about.jpg" className="hero" />
      <div className="bg-white z-20 col-span-3 md:col-span-2 flex flex-col sm:flex-row sm:mb-8">
        <div className="px-4 pt-4 md:px-8 sm:pt-8 flex-1">
          <h2 className="font-condensed uppercase text-4xl sm:text-6xl md:text-7xl leading-stacked mb-8">I will teach you how to code</h2>
          <h2 className="font-handwriting text-6xl sm:text-7xl md:text-8xl relative md:-ml-10 my-8">Let's be Honest</h2>
          <p className="large-body-copy">It’s hard.</p>
          <p>Especially if you’re a designer, it’s hard to get your right brain to do a left brain’s job. The struggle is real.</p>
        </div>
        <div className="flex-1 hidden sm:block">
          {/* speaking pic */}
          <img src="/img/about__speaking-big-idea.jpg" alt="Amy Dutton Speaking at a Conference" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="col-span-3 md:col-span-1 md:col-start-2 px-4 md:px-8">
        <p>I know it’s not from a lack of trying or desire. Coding can be tedious. Dry. Boring.</p>
        <p><p>Coding is hard.</p></p>
        <p>I’ve been there before and I can help you.</p>
        <blockquote>How much you struggle doesn’t indicate how good of a programmer you will be, but it <span className="text-java">does</span> indicate whether you have the persistance to keep going.</blockquote>
      </div>
      <div className="col-start-1 md:col-start-2 col-span-3 md:col-span-1 px-4 md:px-8 mt-4">
        <h2 className="font-handwriting text-6xl sm:text-7xl md:text-8xl relative md:-ml-10 my-8">Learn to Code & Level Up</h2>
        <h3 className="font-condensed text-baliHai uppercase text-4xl md:text-6xl leading-stacked">...in a way that makes sense to you.</h3>
        <p>Meaning, you can absorb the content in a variety of formats: articles, emails, videos, hands-on projects, and webinars with demos and live Q&A.</p>
        <p>It’s my dream that you’ll find a community of learners that challenge and help each other succeed. We're  on this journey together.</p>
        <h3 className="font-condensed uppercase text-5xl sm:text-6xl text-bunting leading-stacked pt-4 sm:pt-8">I've been in  your place.</h3>
        <h3 className="font-condensed uppercase text-5xl sm:text-6xl text-baliHai leading-stacked pb-4 sm:pb-8">It looks like magic.</h3>
        <p>Every time you look at code, you feel like you’re looking at gobbley goop. It’s a foreign language! You don’t know where to begin, but you do have the end in mind. I can help you get there!</p>
      </div>
      <div className="col-span-3 text-center font-modern italic font-bold text-3xl sm:text-4xl bg-callout bg-cover py-12 mt-8 mb-16 md:mb-24 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto text-bunting">I care about helping more people understand code without all the overwhelm.</div>
      </div>
      <div className="col-span-3 w-full grid grid-cols-12">
        <div className="col-start-1 sm:col-start-1 lg:col-start-2 px-4 col-span-10 md:col-span-8 pb-8">
          <h3 className="font-condensed uppercase text-bunting text-5xl sm:text-6xl">I truly believe:</h3>
          <ol className="large-numbers">
            <li><strong>Anyone can learn how to code.</strong> Yes, sometimes you want to pull your hair out and, yes, some days are easier than others. But, I believe you can.</li>
            <li><strong>Coding can unlock opportunities for you.</strong> Coding helped me succeed as a business owner. It has changed the way I think about problems, not to mention, I was able to expand my offerings, provide a one-stop web design and development shop, and stay at home with my babies.</li>
            <li><strong>The sky is the limit.</strong> When you know how to code, you can build anything you want: a web application, an app for your phone, or your own website. If you can think it, you can build.</li>
            <li><strong>Designers that can code are better designers.</strong> I know that’s probably a controversial statement, but I believe anytime you’re creating, the better you understand the medium, its limitations, and sweet spots, the more proficient you’ll be at using it. </li>
            <li><strong>There’s something magical about being able to execute an idea from conception to completion</strong>: discovery to design to development to deployment. I love seeing an idea come to fruition, exactly as you envisioned it.</li>
            <li><strong>Coffee makes everything better.</strong> Enough said.</li>
          </ol>
        </div>
        <div className="col-span-2 col-start-11 bg-believe bg-cover"></div>
      </div>
      <div className="col-span-3 grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 row-start-1 row-span-1">
          <img src="/img/about__why-should-i-care-1.jpg" alt="You've Got This" />
        </div>
        <div className="col-start-1 col-span-12 md:col-span-6 row-start-3 md:row-start-2 row-span-1">
          <img src="/img/about__why-should-i-care-2.jpg" alt="" className="hidden md:block" />
          <div className="bg-brightPink p-8">
            <p className="font-sans text-white mb-0 md:max-w-2/3">All these experiences, can help me translate where you are to where you want to be and determine the best way to get there.</p>
          </div>
        </div>
        <div className="why-should-i-care col-span-12 md:col-span-6 col-start-1 md:col-start-5 md:row-start-1 md:row-span-2 bg-white px-4 md:px-16 pt-14 pb-8 md:py-14 md:mt-32">
          <hr className="border-none bg-hrShort bg-half h-9 bg-no-repeat relative -left-6 mb-4" />
          <h3 className="uppercase font-condensed text-5xl sm:text-7xl leading-stacked sm:leading-stacked mb-2">WHAT'S DIFFERENT?</h3>
          <h4 className="text-baliHai font-condensed text-3xl sm:text-4xl mb-4">I write from a wide variety of experiences. </h4>

          <p>
            <span role="image" aria-label="Grandma">👵🏻</span>
            I’ve been designing and developing websites for the past 20 years. In Internet years, I’m ancient. But, it also means, I know things.
          </p>

          <p>
            <span role="image" aria-label="Briefcase">💼</span>
            I’ve worked in a variety of settings: a small business of 10-15, a medium sized company of 70, an internal team for a large corporation of 1,000+,  a freelancer, and ran the show at my own agency.  I understand the pitfalls and joys, triumphs and struggles of each.
          </p>

          <p>
            <span role="image" aria-label="Computer">🖥️</span>
            Throughout the years, I’ve built hundreds of websites, ranging from custom web applications, brochure marketing sites, eCommerce, and Membership sites. I’ve designed and developed for multi-million dollar brands and small, lean start-ups.
        </p>

          <p>
            <span role="image" aria-label="Apple">🍎</span>
            <strong>I love teaching.</strong> I always have. I love seeing the light bulb go off when a concept finally clicks.
          </p>

          <p>
            When I was a senior in high school, I took a web development class to meet my computer requirements to graduate. Halfway through the year, my teacher was diagnosed with a brain tumor. They couldn’t find a substitute that knew the material. My teacher asked me to teach the class in exchange for an automatic A.
          </p>

          <img src="/img/about__ufl.png" srcSet="/img/about__ufl.png 1x, /img/about__ufl@2x.png 2x" alt="University of Florida" className="float-left sm:float-right mr-8 sm:ml-8 mb-4 sm:mb-0 top-2 relative" />
          <p>More recently, I wrote the curriculum and taught “Web Interactivity and Engagement” for the University of Florida, in their Master of Arts in Mass Communication with a specialization in Web Design program.</p>
        </div>

      </div>
      <EmailNewsletter className="col-span-3" />
      <div className="col-span-3 grid grid-cols-12 sm:pb-8">
        <div className="col-span-12 md:col-span-5">
          <img src="/img/about__dutton-family.jpg" srcSet="/img/about__dutton-family.jpg 1x, /img/about__dutton-family@2x.jpg 2x" alt="Dutton Family" className="w-full" />
        </div>
        <div className="col-span-12 md:col-span-6 px-4 md:pl-8 md:pr-0 pt-8 sm:pt-16">
          <h2 className="font-condensed uppercase text-6xl sm:text-8xl leading-stacked sm:leading-stacked">Say Hello <span className="font-handwriting lowercase">and</span> Introduce Yourself</h2>
          <p>Hello, my name is Amy (Haywood) Dutton. It’s nice to “meet” you. I’m the Senior UI/UX Designer and Frontend Developer at <a href="http://codingzeal.com" target="_blank">Zeal</a>. I LOVE creating things, which usually manifests itself in web design and development.</p>
        </div>
      </div>
      <div className="col-span-3 mb-8">
        <img className="w-full" src="/img/about__photo-collage.jpg" srcSet="/img/about__photo-collage.jpg 1x, /img/about__photo-collage@2x.jpg 2x" alt="Catan, Working from Starbucks, Greyhound" />
      </div>
      <div className="col-start-1 md:col-start-2 col-span-3 md:col-span-1 px-4 md:px-0">
        <p>I currently live in Chicagoland with my husband and our three adorable (if I do say so myself) kids: Isaac ({kidsAge('isaac')}), Adele ({kidsAge('adele')}), and Emma ({kidsAge('emma')}). As if things weren’t exciting enough, we also adopted a retired racing greyhound and a King Charles Cavalier Spaniel.</p>
        <p>If I’m not sitting front of my computer, I’m hanging out with friends and family, binging on Netflix / Hulu / Prime / Disney+ / AppleTV (all the streaming!), playing Settlers or Nertz, or reading and drinking coffee.</p>
      </div>
      <div className="col-span-3 max-w-4xl mx-auto mt-8 mb-10">
        <h2 className="font-condensed uppercase leading-stacked sm:leading-stacked text-5xl sm:text-6xl px-4 md:px-0">With 20 years of experience, I’ve built hundreds of websites. I can teach you.</h2>
      </div>
      {/* logos */}
      <div className="col-span-3 mb-20 sm:mb-28 mx-auto max-w-7xl">
        <LogoGrid />
      </div>
      <div className="col-span-3 grid grid-cols-12 mb-8">
        <div className="col-start-1 md:col-start-2 col-span-12 md:col-span-6 md:mr-8 px-4 md:px-0">
          <h2 className="uppercase font-condensed leading-stacked text-6xl sm:text-8xl mb-4">The Main Story</h2>
          <p>When I was in 8th grade, I built my first website, using Netscape Navigator’s web tools. I decided it would be a good idea to pull all the animated gifs on the Internet and put them in one central location. With so many animated images, my site was enough to give anyone a seizure. Let’s not even talk about file size and load times. But, I like to believe that I was before my time. Curated content and animated gifs anyone? Sounds like today’s <a href="http://giphy.com" target="_blank">Giphy</a>! -- And I still have a soft spot in my heart for a good animated gif.</p>
          <p>I graduated from college in 2006 from Middle Tennessee State University with a degree in Radio / TV Broadcasting and a concentration in Animation.</p>
        </div>
        <div className="col-span-12 md:col-span-4 sm:mx-auto">
          {/* giphy cat */}
          <img src="/img/about__cat-typing.gif" alt="Cat Typing" />
        </div>
      </div>
      <div className="col-span-3 max-w-4xl mx-auto mt-8 mb-4 sm:my-8 flex px-4 sm:px-0">
        <div className="mr-8">
          <img className="max-w-full" src="/img/about__mtsu-logo.png" alt="Middle Tennessee State University logo" />
        </div>
        <div>
          <img className="max-w-full" src="/img/about__mtsu-building.jpg" alt="Middle Tennessee State University Library" />
        </div>
      </div>
      <div className="col-start-1 md:col-start-2 col-span-3 md:col-span-1 my-8 px-4 md:px-0">
        <div><p>After college, I went and worked for a web company on Music Row (in Nashville, TN) called echo (owned by Ticketmaster). We built websites for artists and entertainers. It’s still fun to name drop in conversations. (*Cough* Janet Jackson, Taylor Swift, Kelly Clarkson, Counting Crows, Ice Cube, and Kanye West — just to name a few). I worked there for a year, before going to LifeWay. It was a good thing, too, because two months after I left, Ticketmaster dissolved echo.</p></div>
      </div>
      <div className="col-span-3 mb-12">
        <img className="w-full" src="/img/about__instagram-grid.jpg" alt="Instagram Pictures" />
      </div>
      <div className="col-span-3 grid grid-cols-12 mb-8">
        <div className="col-start-1 md:col-start-2 col-span-12 md:col-span-6 pt-0 md:pt-8 px-4 md:px-0 sm:mb-10 lg:mb-0">
          <p>I worked at LifeWay for four years in the Training and Events Production department. We did print, web, and video support for all the various events LifeWay produces across the country. I was an art director, serving five different departments, ranging in demographics from young children to senior adults</p>
          <p>In January 2013, I left LifeWay to do freelance fulltime with <a href="http://ahhacreative.com" target="_blank">Ah Ha Creative</a>.  For six and a half years, I had the privilege of partnering with a variety of clients and creative agencies to make some really cool projects.</p>
        </div>
        <div className="row-span-1 md:row-span-2 col-start-1 md:col-start-9 col-span-12 md:col-span-4 px-4 md:px-8 flex flex-row md:flex-col">
          <div className="flex-1 mr-2 md:mr-0 relative top-8 md:top-0">
            <img className="mb-16 w-full" src="/img/about__screenshot__rorke-denver.jpg" alt="Screenshot of Rorke Denver's Website" />
          </div>
          <div className="flex-1 ml-2 md:ml-2">
            <img className="w-full" src="/img/about__screenshot__ginger-hardage.jpg" alt="Screenshot of Ginger Hardage's Website" />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 md:mr-4 px-4 md:px-8 relative -top-12 md:top-0">
          <img className="w-full" src="/img/about__screenshot__ylm.jpg" alt="Screenshot of Yellow Leaf Marketing's Website" />
        </div>
        <div className="col-span-6 md:col-span-4 pl-2 pr-4 md:px-8 md:pt-16 relative top-8 md:top-0">
          <img className="w-full" src="/img/about__screenshot__grace-pointe.jpg" alt="Screenshot of Grace Pointe Student Ministry's Website" />
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-12 mb-10 md:mb-16">
        <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 col-span-12 md:col-span-7 md:pt-16 px-4 md:px-8">
          <img src="/img/about__zeal-team.jpg" alt="Coding Zeal Team" />
        </div>
        <div className="col-span-12 md:col-span-3 px-4 md:px-8">
          <img className="float-right md:float-none mb-8 max-w-48" src="/img/about__zeal-logo-large.png" srcSet="/img/about__zeal-logo-large.png 1x, /img/about__zeal-logo-large@2x.png 2x" alt="Coding ZEAL logo" />
          <p>This brings us to now. In July 2019, I took a full job as the Senior UI/UX Designer and Frontend Developer at Zeal. So far, this has been one of the best jobs I’ve ever had. I could easily turn this into a love letter, but I’ll summarize it to say, Zeal cares about people and they care about our craft. I couldn’t ask for anything more.</p>
        </div>
      </div>
      {/* close grid */}
    </div>
  )
};

export { AboutPage };

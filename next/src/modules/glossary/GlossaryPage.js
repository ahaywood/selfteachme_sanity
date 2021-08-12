import { useState, Fragment } from "react";
import { Hero } from "modules/shared/components/Hero";
import { FullWidthBlogCard } from "modules/shared/components/FullWidthBlogCard";
import { EmailNewsletter } from "modules/shared/components/EmailNewsletter";
import { Subnav } from "./components/Subnav";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "modules/shared/blockContent/Serializers";

const GlossaryPage = ({ glossary }) => {
  const [currentLetter, setCurrentLetter] = useState('a');
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return (
    <>
      <Hero title="Glossary" src="/img/bg__glossary.jpg" className="hero" />
      <Subnav content={alphabet} />

      {/* content */}
      <main className="grid grid-cols-12 py-8">
        <div className="col-span-3 col-start-2 sticky top-14 font-modern text-300xl text-baliHai opacity-30 row-start-1 text-center uppercase">
          {currentLetter}
        </div>
        <div className="col-span-8 col-start-3 row-start-1">
          <dl className="grid grid-cols-8 gap-8">
            {glossary.map((item) => (
              <Fragment key={item._id}>
                <dt className="col-span-2 text-right uppercase">
                  <div className="font-condensed bg-serenade py-1 px-2 text-xl tracking-wider inline-block">{item.name}</div>
                </dt>
                <dd className="col-span-6"><BlockContent blocks={item.description} serializers={serializers} /></dd>
              </Fragment>
            ))}
          </dl>
        </div>
      </main>

      <div><EmailNewsletter /></div>
    </>
  )
}

export { GlossaryPage }

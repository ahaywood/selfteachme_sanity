import { useState, Fragment } from 'react';
import { Hero } from 'modules/shared/components/Hero';
import { EmailNewsletter } from 'modules/shared/components/EmailNewsletter';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from 'modules/shared/blockContent/Serializers';
import { Subnav } from './components/Subnav';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  glossary: SelfTeach.Glossary[];
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const GlossaryPage = ({ glossary }: Props): JSX.Element => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const [selectedLetters, setSelectedLetters] = useState(alphabet);

  // filter by a specific letter
  // this function gets passed to the subnav component
  const filterByLetter = (letter) => {
    // if all is selected, set the array the entire alphabet
    if (letter === 'all') setSelectedLetters(alphabet);
    // otherwise, stick the individual letter into an array so that map can
    // iterate over it
    else setSelectedLetters([letter]);
  };

  return (
    <>
      <Hero title="Glossary" src="/img/bg__glossary.jpg" className="hero" />
      <Subnav content={alphabet} handleClick={filterByLetter} />

      {/* content */}
      {selectedLetters.map((item, i) => {
        // determine what letter we need to check against
        // if the selected letter array is longer than one letter, we're looking at
        // all the letters. Sent the current letter to the current index of the
        // alphabet array. Otherwise, use the first letter in the array
        const checkAgainst = selectedLetters.length > 1 ? alphabet[i] : selectedLetters[0];

        // filter for terms that start with the current letter
        const currentGlossaryTerms = glossary.filter(
          (term) => term.name.substring(0, 1).toLowerCase() === checkAgainst
        );

        // check to see if there are any terms that start with that letter
        // if none exist, display a "not found" error message
        if (currentGlossaryTerms.length < 1)
          return (
            <Fragment key={i}>
              <em>It doesn't look like we have any terms that begin with that letter.</em>
            </Fragment>
          );

        // otherwise, display thc content
        return (
          <div className="grid grid-cols-12 py-8" key={i}>
            <div className="col-span-12 lg:col-span-3 col-start-1 lg:col-start-2 sticky top-14 font-modern text-300xl text-baliHai opacity-30 row-start-1 lg:text-center uppercase z-0">
              {checkAgainst}
            </div>
            <div className="col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 px-mobile lg:px-0 row-start-1">
              <dl className="grid grid-cols-8 gap-8 z-10 relative">
                {currentGlossaryTerms.map((glossaryItem) => (
                  <Fragment key={glossaryItem._id}>
                    <dt className="col-span-12 lg:col-span-2 lg:text-right uppercase">
                      <div className="font-condensed bg-serenade py-1 px-2 text-xl tracking-wider inline-block nowrap">
                        {glossaryItem.name}
                      </div>
                    </dt>
                    <dd className="col-span-12 lg:col-span-6">
                      {glossaryItem.description && (
                        <BlockContent blocks={glossaryItem.description} serializers={serializers} />
                      )}
                    </dd>
                  </Fragment>
                ))}
              </dl>
            </div>
          </div>
        );
      })}

      <div>
        <EmailNewsletter />
      </div>
    </>
  );
};

export { GlossaryPage };

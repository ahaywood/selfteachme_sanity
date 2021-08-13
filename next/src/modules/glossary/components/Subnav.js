import { useState, useEffect } from "react";
import Link from "next/link";
import concat from "lodash/concat";

const Subnav = ({ content, handleClick }) => {
  const [selectedSubnav, setSelectedSubnav] = useState('all');
  const subNav = concat('all', content);

  const filterByLetter = (item, e) => {
    e.preventDefault();
    setSelectedSubnav(item);    // set the state for the subnav display
    handleClick(item);         // run the handleClick function as passed in
  }

  return (
    <div className="subnav bg-serenade w-full absolute top-52 md:top-64 z-20 overflow-x-scroll left-0">
      {subNav && (
        <ul className="flex md:justify-center">
          {subNav.map((item, i) => (
            <li
              key={i}
              className={`font-condensed uppercase mx-4 text-2xl tracking-wide mb-0 leading-stacked py-2 relative top-1 ${selectedSubnav == item && ('text-brightPink')}`}>
              <a
                className="cursor-pointer"
                onClick={(e) => { filterByLetter(item, e) }}
              >{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div >
  );
};

export { Subnav };

import Link from 'next/link';

import { getCurrentYear } from 'utils/date';
import { Nav } from './Nav';
import { Social } from './Social';

const Footer = ({ social }) => {
  const year = getCurrentYear();
  return (
    <footer>
      <Nav className="py-12 mt-2" />

      <div className="bg-brightPink h-2 my-2" />

      <div className="bg-bunting text-white pb-16 pt-20 px-1 md:px-0">
        <Social className="pb-8 md:pb-16" social={social} />
        <ul className="font-sans uppercase tracking-widest text-sm flex justify-center pb-14 font-bold flex-col md:flex-row text-center">
          <li className="md:border-r-1 border-white px-6 mb-2 md:leading-5 text-sm md:mb-5">
            <Link href="/legal/privacy-policy">
              <a className="hover:text-gold">Privacy Policy</a>
            </Link>
          </li>
          <li className="md:border-r-1 border-white px-6 mb-2 md:leading-5 text-sm md:mb-5">
            <Link href="/legal/terms-and-conditions">
              <a className="hover:text-gold">Terms and Conditions</a>
            </Link>
          </li>
          <li className="px-6 md:leading-5 text-sm mb-2 md:mb-5">
            <Link href="/legal/disclaimers">
              <a className="hover:text-gold">Disclaimers</a>
            </Link>
          </li>
        </ul>

        <p className="font-sans text-xs tracking-wide uppercase text-center font-bold">
          Copyright &copy; {year}.{' '}
          <a href="http://ahhacreative.com" target="_blank" className="hover:underline hover:text-gold block md:inline">
            Ah Ha Creative, LLC.
          </a>
          &nbsp;All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };

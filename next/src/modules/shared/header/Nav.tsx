import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '../components/icon';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  isNavOpen: boolean;
  toggleNav: () => void;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Nav = ({ isNavOpen, toggleNav }: Props): JSX.Element => (
  <div
    className={`bg-black w-screen h-screen fixed overflow-y-scroll left-0 z-40 p-10 transition-inset duration-500 ${
      isNavOpen ? 'top-0' : '-top-screen'
    }`}
  >
    <div className="max-w-5xl mx-auto text-center">
      <button className="pr-2 pb-8 focus:outline-none w-10 h-10 md:w-auto md:h-auto" onClick={toggleNav} type="button">
        <Image src="/img/x--thin.svg" alt="Close Navigation" width="36" height="37" />
      </button>
      <ul className="navigation">
        <li>
          <Link href="/">
            <a className="hover:text-gold">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:text-gold">About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="hover:text-gold">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/newsletter">
            <a className="hover:text-gold">Newsletter</a>
          </Link>
        </li>
        <li>
          <a href="http://compressed.fm" className="hover:text-gold" target="_blank" rel="noreferrer">
            <span className="inline-block relative">
              <Icon name="ExternalLink" className="-right-8 absolute" />
              Podcast
            </span>
          </a>
        </li>
        {/* <li>
          <a href="https://selfteachme.circle.so/" className="hover:text-gold" target="_blank" rel="noreferrer">
            <span className="inline-block relative">
              <Icon name="ExternalLink" className="-right-8 absolute" />
              Community
            </span>
          </a>
        </li> */}
        <li>
          <Link href="/contact">
            <a className="hover:text-gold">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export { Nav };

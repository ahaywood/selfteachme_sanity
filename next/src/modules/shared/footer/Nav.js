import Link from 'next/link';
import Image from 'next/image';

const Nav = ({ className }) => (
  <div className={`bg-gold font-condensed uppercase text-2xl font-normal ${className}`}>
    <ul className="list-none flex flex-col md:flex-row justify-center items-center">
      <li className="footer-nav-item">
        <Link href="/start-here">
          <a className="h-6 hover:text-sapphire">Start Here</a>
        </Link>
      </li>
      <li className="mb-0 hidden md:block">
        <Image src="/img/x--footer.svg" width="22" height="22" />
      </li>
      <li className="footer-nav-item">
        <Link href="/about">
          <a className="h-6 hover:text-sapphire">About</a>
        </Link>
      </li>
      <li className="mb-0 hidden md:block">
        <Image src="/img/x--footer.svg" width="22" height="22" />
      </li>
      <li className="footer-nav-item">
        <Link href="/blog">
          <a className="h-6 hover:text-sapphire">Blog</a>
        </Link>
      </li>
      <li className="mb-0 hidden md:block">
        <Image src="/img/x--footer.svg" width="22" height="22" />
      </li>
      <li className="footer-nav-item">
        <Link href="/newsletter">
          <a className="h-6 hover:text-sapphire">Newsletter</a>
        </Link>
      </li>
      <li className="mb-0 hidden md:block">
        <Image src="/img/x--footer.svg" width="22" height="22" />
      </li>
      <li className="footer-nav-item">
        <a href="http://compressed.fm" target="_blank" className="h-6 hover:text-sapphire">
          Podcast
        </a>
      </li>
      <li className="mb-0 hidden md:block">
        <Image src="/img/x--footer.svg" width="22" height="22" />
      </li>
      <li className="footer-nav-item">
        <a href="https://selfteachme.circle.so/" target="_blank" className="h-6 hover:text-sapphire">
          Community
        </a>
      </li>
      <li className="mb-0 hidden md:block">
        <Image src="/img/x--footer.svg" width="22" height="22" />
      </li>
      <li className="footer-nav-item">
        <Link href="/contact">
          <a className="h-6 hover:text-sapphire">Contact</a>
        </Link>
      </li>
    </ul>
  </div>
);

export { Nav };

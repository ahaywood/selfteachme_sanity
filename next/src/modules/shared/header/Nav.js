import Link from "next/link";

const Nav = ({ isNavOpen, toggleNav }) => {
  return (
    <div
      className={`fixed bg-gold top-0 w-1/2 h-screen z-50 px-6 pt-2 transition-inset duration-500 ${
        isNavOpen ? "left-0" : "-left-screen"
      }`}
    >
      <button
        className="text-5xl text-bunting border-b-4 inline border-brightPink pr-2 pb-8 hover:text-sapphire focus:outline-none"
        onClick={toggleNav}
      >
        &times;
      </button>
      <ul className="list-none text-brightPink font-condensed uppercase mt-10 text-6xl">
        <li>
          <Link href="/">
            <a className="hover:text-sapphire">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:text-sapphire">About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="hover:text-sapphire">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/newsletter">
            <a className="hover:text-sapphire">Newsletter</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:text-sapphire">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Nav };

import Link from "next/link";

const Nav = ({ isNavOpen, toggleNav }) => {
  return (
    <div
      className={`bg-black w-screen h-screen fixed left-0 z-40 p-10 transition-inset duration-500 ${isNavOpen ? "top-0" : "-top-screen"
        }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <button
          className="text-5xl text-bunting pr-2 pb-8 hover:text-gold focus:outline-none"
          onClick={toggleNav}
        >
          <img src="/img/x--thin.svg" alt="" />
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
            <Link href="/contact">
              <a className="hover:text-gold">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Nav };

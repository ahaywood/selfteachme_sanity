import Link from "next/link";

import { Nav } from "./Nav";
import { Social } from "./Social";

import { getCurrentYear } from "utils/date";

const Footer = () => {
  const year = getCurrentYear();
  return (
    <footer>
      <Nav className="py-12 mt-2" />

      <div className="bg-brightPink h-2 my-2" />

      <div className="bg-bunting text-white pb-16 pt-20">
        <Social className="pb-16" />
        <ul className="font-sans uppercase tracking-widest text-sm flex justify-center pb-14 font-bold">
          <li className="border-r-1 border-white px-6 leading-5 text-sm">
            <Link href="/legal/privacy-policy">
              <a className="hover:text-gold">Privacy Policy</a>
            </Link>
          </li>
          <li className="border-r-1 border-white px-6 leading-5 text-sm">
            <Link href="/legal/terms-and-conditions">
              <a className="hover:text-gold">Terms and Conditions</a>
            </Link>
          </li>
          <li className="px-6  leading-5 text-sm">
            <Link href="/legal/disclaimers">
              <a className="hover:text-gold">Disclaimers</a>
            </Link>
          </li>
        </ul>

        <p className="font-sans text-xs tracking-wide uppercase text-center font-bold">
          Copyright &copy; {year}.{" "}
          <a
            href="http://ahhacreative.com"
            target="_blank"
            className="hover:underline hover:text-gold"
          >
            Ah Ha Creative, LLC
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };

import Link from 'next/link';
import Image from 'next/image';

const Hero = ({ className, src, title, subtitle }) => (
  <div className={`col-span-3 ${className}`}>
    <div className="text-center h-48 md:h-64 w-full relative pt-4 bg-black">
      {src && (
        <img src={src} className="w-full h-full absolute left-0 top-0 right-0 bottom-0 object-cover opacity-30" />
      )}
      <Link href="/">
        <a className="w-40 block mx-auto logo">
          <Image src="/img/logo.svg" width="267" height="70" alt="SelfTeach.me" />
        </a>
      </Link>
      {title && <h1 className="text-serenade uppercase text-6xl lg:text-8xl relative font-modern mt-4">{title}</h1>}
      {subtitle && <h2 className="font-condensed uppercase text-gold text-4xl relative">{subtitle}</h2>}
    </div>
    <div className="bg-brightPink h-2 my-2" />
  </div>
);

export { Hero };

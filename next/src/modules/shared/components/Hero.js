import Link from "next/link";
import Image from "next/image";

const Hero = ({ className, src, title }) => {
  return (
    <div className={`col-span-3 ${className}`}>
      <div className="w-full text-center h-64 w-full relative pt-4 bg-black">
        {src && (
          <img
            src={src}
            className="w-full h-full absolute left-0 top-0 right-0 bottom-0 object-cover opacity-30"
          />
        )}
        <Link href="/">
          <a>
            <Image
              src="/img/logo.svg"
              width="267"
              height="70"
              alt="SelfTeach.me"
            />
          </a>
        </Link>
        {title && (
          <h1 className="text-serenade uppercase text-8xl relative font-modern mt-4">
            {title}
          </h1>
        )}
      </div>
      <div className="bg-brightPink h-2 my-2" />
    </div>
  );
};

export { Hero };

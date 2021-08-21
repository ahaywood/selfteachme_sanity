import Image from "next/image";
import { ThreeUp } from "./components/ThreeUp";
import { EmailNewsletter } from "modules/shared/components/EmailNewsletter";
import { LatestPosts } from "modules/shared/components/LatestPosts";
import { ButtonLink } from "modules/shared/components/ButtonLink";

const HomePage = ({ latestPosts }) => {
  return (
    <>
      {/* hero */}
      <section className="text-center min-h-9 md:min-h-screen bg-hero bg-no-repeat bg-cover bg-top flex justify-center">
        <div className="pt-10">
          <div className="mb-8">
            <div className="w-48 h-10 md:w-64 md:h-16 mx-auto">
              <Image
                alt="SelfTeach.me"
                height="70"
                src="/img/logo.svg"
                width="267"
              />
            </div>
          </div>
          <h1 className="mb-8">
            <div className="hero-title">Build</div>
            <div className="with-rules text-white">with</div>
            <div className="hero-title ">Confidence</div>
          </h1>
          <p className="text-white large-body-copy mb-10">
            I teach designers how to code.{" "}
            <span role="img" aria-label="robot">
              🤖
            </span>
            <br />I teach developers how to design.{" "}
            <span role="img" aria-label="paint">
              🎨
            </span>
          </p>
          <div className="w-28 md:w-auto h-28 md:h-auto mx-auto">
            <Image
              alt="Amy Dutton"
              height="167"
              width="167"
              src="/img/avatar@2x.jpg"
              className="rounded-full"
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-black text-center text-white py-10 px-1 md:px-0">
        <p className="text-lg md:text-xl">
          Want to code your own website, but not sure where to start?
          <br />
          Or maybe, you've tried to learn before, but nothing seems to stick?
          <br />
          The idea of looking at code is enough to make you want to vomit.
        </p>

        <h5 className="font-sans font-bold uppercase text-brightPink mt-3 mb-8 text-xl">
          I can help!
        </h5>

        <ButtonLink href="https://selfteachme.ck.page/621ac7c092" target="_blank">
          Not sure where to begin?{" "}
          <span className="ml-1 underline block sm:inline">Start Here!</span>
        </ButtonLink>
      </section>
      {/* past websites */}
      <section className="bg-brightPink text-white text-center pt-10 pb-8 md:py-16 mb-20 md:mb-0">
        <p className="mb-10 md:mb-8 px-1 md:px-0 text-lg md:text-xl">
          Over the past 20 years, I've built hundreds of websites. I can teach
          you.
        </p>
        <ul className="list-none flex justify-between items-center max-w-6xl mx-auto">
          <li className="px-2 md:px-6 lg:px-0">
            <Image
              className="blend-screen"
              src="/img/logo__janet-jackson@2x.png"
              alt="Janet Jackson"
              width="284"
              height="52"
            />
          </li>
          <li className="px-2 md:px-6 lg:px-0">
            <Image
              className="blend-screen"
              src="/img/logo__counting-crows@2x.png"
              alt="Counting Crows"
              width="202"
              height="107"
            />
          </li>
          <li className="px-2 md:px-6 lg:px-0">
            <Image
              className="blend-screen"
              src="/img/logo__ice-cube@2x.png"
              alt="IceCube"
              width="236"
              height="72"
            />
          </li>
          <li className="px-2 md:px-6 lg:px-0">
            <Image
              className="blend-screen"
              src="/img/logo__kelly-clarkson@2x.png"
              alt="Kelly Clarkson"
              width="170"
              height="74"
            />
          </li>
        </ul>
      </section>
      <ThreeUp />
      <LatestPosts latestPosts={latestPosts} />
      <EmailNewsletter />
    </>
  );
};

export { HomePage };

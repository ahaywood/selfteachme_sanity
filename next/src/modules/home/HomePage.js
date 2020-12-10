import Image from "next/image";
import { ThreeUp } from "./components/ThreeUp";
import { EmailNewsletter } from "modules/shared/components/EmailNewsletter";
import { LatestPosts } from "modules/shared/components/LatestPosts";
import { ButtonLink } from "modules/shared/components/ButtonLink";

const HomePage = () => {
  return (
    <>
      {/* hero */}
      <section className="text-center min-h-screen bg-hero bg-top flex justify-center">
        <div className="pt-10">
          <div className="mb-8">
            <Image
              src="/img/logo.svg"
              width="267"
              height="70"
              alt="SelfTeach.me"
            />
          </div>
          <h1 className="mb-8">
            <div className="hero-title">Code</div>
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
          <Image
            alt="Amy Dutton"
            height="167"
            width="167"
            src="/img/avatar@2x.jpg"
            className="rounded-full"
          />
        </div>
      </section>
      {/*  */}
      <section className="bg-black text-center text-white py-10">
        <p className="text-xl">
          Want to code your own website, but not sure where to start?
          <br />
          Or maybe, you've tried to learn before, but nothing seems to stick?
          <br />
          The idea of looking at code is enough to make you want to vomit.
        </p>

        <h5 className="font-sans font-bold uppercase text-brightPink mt-3 mb-8 text-xl">
          I can help!
        </h5>

        <ButtonLink href="/plan">
          Not sure where to begin?{" "}
          <span className="ml-1 underline">Start Here!</span>
        </ButtonLink>
      </section>
      {/* past websites */}
      <section className="bg-brightPink text-white text-center py-16">
        <p className="mb-8">
          Over the past 20 years, I've built hundreds of websites. I can teach
          you.
        </p>
        <ul className="list-none flex justify-between items-center max-w-6xl mx-auto">
          <li>
            <Image
              className="blend-screen"
              src="/img/logo__janet-jackson@2x.png"
              alt="Janet Jackson"
              width="284"
              height="52"
            />
          </li>
          <li>
            <Image
              className="blend-screen"
              src="/img/logo__counting-crows@2x.png"
              alt="Counting Crows"
              width="202"
              height="107"
            />
          </li>
          <li>
            <Image
              className="blend-screen"
              src="/img/logo__ice-cube@2x.png"
              alt="IceCube"
              width="236"
              height="72"
            />
          </li>
          <li>
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
      <LatestPosts />
      <EmailNewsletter />
    </>
  );
};

export { HomePage };

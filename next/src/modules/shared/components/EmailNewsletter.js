import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonSubmit } from "./ButtonSubmit";

const EmailNewsletter = ({ className }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div className={`pt-10 md:pt-20 pb-5 md:pb-10 px-2 md:px-0 vertical-pluses ${className}`}>
      <div className="max-w-7xl sm:container mx-auto grid md:grid-cols-2 md:gap-28">
        <div>
          <h2 className="font-condensed relative text-6xl sm:text-7xl md:text-9xl uppercase leading-12 md:leading-24 mb-4">
            This industry moves fast,{" "}
            <span className="font-handwriting lowercase leading-10">but</span>{" "}
            you can stay up to date:
          </h2>
          <p className="text-lg md:text-xl font-serif">
            Receive a weekly email of the Internet's best from articles, to
            tutorials, to pro tips.
          </p>
        </div>
        <div>
          <form action="https://getform.io/f/4a4b1de4-c339-4798-8e51-968aea3f8b10" method="POST">
            <div className="flex flex-col sm:flex-row md:flex-col">
              <div className="sm:mr-4 md:mr-0">
                <label htmlFor="emailSignupFirstName">First Name</label>
                <input
                  type="text"
                  id="emailSignupFirstName"
                  name="firstName"
                  ref={register({ required: true })}
                />
              </div>

              <div className="sm:ml-4 md:ml-0">
                <label htmlFor="emailSignupEmail">Email Address</label>
                <input
                  type="text"
                  id="emailSignupEmail"
                  name="email"
                  ref={register({ required: true })}
                />
              </div>
            </div>

            <ButtonSubmit className="with-emoji mb-8 mt-8 mx-1 md:mx-0">
              <span
                role="img"
                aria-label="raise hand"
                className="-left-20 -top-8 text-7xl"
              >
                🙋‍♀️
              </span>
              I want to be in the know.
            </ButtonSubmit>
          </form>
        </div>
      </div>
    </div>
  );
};

export { EmailNewsletter };

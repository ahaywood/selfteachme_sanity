import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonSubmit } from "./ButtonSubmit";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const LeadMagnet = ({ buttonLabel, children, className, content, heading }) => {
  const { emailSignup, setEmailSignup } = useState();

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setEmailSignup(data);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Email Newsletter", ...emailSignup }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className={`pt-10 pb-10 vertical-pluses ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-28">
        <div>
          {heading && (
            <h2 className="font-condensed relative text-9xl uppercase leading-24 mb-4">
              {heading}
            </h2>
          )}
          {children && children}
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="emailSignupFirstName">First Name</label>
            <input
              type="text"
              id="emailSignupFirstName"
              name="firstName"
              ref={register({ required: true })}
            />

            <label htmlFor="emailSignupEmail">Email Address</label>
            <input
              type="text"
              id="emailSignupEmail"
              name="email"
              ref={register({ required: true })}
            />

            <ButtonSubmit className="with-emoji mb-8 mt-8">
              {buttonLabel ? buttonLabel : (
                <>
                  <span
                    role="img"
                    aria-label="raise hand"
                    className="-left-20 -top-8 text-7xl"
                  >🙋‍♀️</span>
                  I want to be in the know.
                </>
              )}
            </ButtonSubmit>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LeadMagnet };
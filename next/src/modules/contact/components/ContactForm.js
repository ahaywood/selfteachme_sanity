import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonSubmit } from "modules/shared/components/ButtonSubmit";

const ContactForm = () => {
  const { contactForm, setContactForm } = useState();

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // setContactForm(data);

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "Contact Form", ...contactForm }),
    // })
    //   .then(() => alert("Success!"))
    //   .catch((error) => alert(error));

    // e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-8"
    >
      <div className="relative">
        <label htmlFor="">First Name</label>
        <input
          className={errors.firstName && `error`}
          type="text"
          name="firstName"
          ref={register({ required: true })}
        />
        {errors.firstName && (
          <div className="form-error">Last Name is required</div>
        )}
      </div>
      <div className="relative">
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" ref={register({ required: true })} />
        {errors.lastName && (
          <div className="form-error">Last Name is required</div>
        )}
      </div>
      <div className="relative col-span-full">
        <label htmlFor="">Email Address</label>
        <input type="email" name="email" ref={register({ required: true })} />
        {errors.email && <div className="form-error">Email is required</div>}
      </div>
      <div className="relative col-span-full">
        <input
          type="checkbox"
          name="emailUpdates"
          id="emailUpdates"
          defaultChecked="checked"
        />
        <label className="cursor-pointer" htmlFor="emailUpdates">
          I'd like to receive email updates.
        </label>
      </div>
      <div className="relative col-span-full">
        <label htmlFor="message">Message</label>
        <textarea
          className="textarea"
          name="message"
          id="message"
          ref={register({ required: true })}
        ></textarea>
        {errors.message && (
          <div className="form-error">Message is required</div>
        )}
      </div>
      <div className="col-span-full">
        <ButtonSubmit className="with-emoji mt-12 light">
          <span
            className="relative top-2 -left-24 text-8xl"
            role="img"
            aria-label="dancing woman"
          >
            💃🏻
          </span>
          <span className="font-handwriting normal-case text-8xl font-normal relative top-4 text-black mr-4">
            Submit
          </span>
          Send this sucker into the inter webs
        </ButtonSubmit>
      </div>
    </form>
  );
};

export { ContactForm };

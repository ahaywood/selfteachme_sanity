import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonSubmit } from 'modules/shared/components/ButtonSubmit';
import kwesforms from 'kwesforms';

const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <form
      action="https://kwes.io/api/foreign/forms/Wd53JDA3MuydTlHhmgv9"
      method="POST"
      className="kwes-form grid grid-cols-2 gap-x-8 mb-16 md:mb-0"
    >
      <div className="relative col-span-2 md:col-span-1">
        <label htmlFor="">First Name</label>
        <input
          className={errors.firstName && `error`}
          type="text"
          name="firstName"
          rules="required"
          ref={register({ required: true })}
        />
        {errors.firstName && <div className="form-error">Last Name is required</div>}
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" ref={register({ required: true })} />
        {errors.lastName && <div className="form-error">Last Name is required</div>}
      </div>
      <div className="relative col-span-full">
        <label htmlFor="">Email Address</label>
        <input type="email" name="email" ref={register({ required: true })} rules="required" />
        {errors.email && <div className="form-error">Email is required</div>}
      </div>
      <div className="relative col-span-full">
        <input type="checkbox" name="emailUpdates" id="emailUpdates" defaultChecked />
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
          rules="required"
        />
        {errors.message && <div className="form-error">Message is required</div>}
      </div>
      <div className="col-span-full">
        <ButtonSubmit className="with-emoji mt-12 light">
          <>
            <span className="relative -top-4 md:top-2 -left-24 text-8xl" role="img" aria-label="dancing woman">
              💃🏻
            </span>
            <span className="hidden md:block lg:inline font-handwriting normal-case text-8xl font-normal relative -top-0 md:-top-2 lg:top-4 text-black mr-4">
              Submit
            </span>
            <span className="relative md:-top-8 lg:top-0">
              <span className="inline lg:hidden xl:inline">Send this sucker</span> into the inter webs
            </span>
          </>
        </ButtonSubmit>
      </div>
    </form>
  );
};

export { ContactForm };

import { useForm } from 'react-hook-form';
import { ButtonSubmit } from './ButtonSubmit';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  action: string;
  buttonLabel: JSX.Element;
  children: JSX.Element;
  className: string;
  heading: string | JSX.Element;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const LeadMagnet = ({ action, buttonLabel, children, className, heading }: Props): JSX.Element => {
  const { register } = useForm();

  return (
    <div className={`pt-10 pb-10 vertical-pluses ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-28">
        <div>
          {heading && <h2 className="font-condensed relative text-9xl uppercase leading-24 mb-4">{heading}</h2>}
          {children && children}
        </div>
        <div>
          <form action={action} method="POST">
            <label htmlFor="emailSignupFirstName">First Name</label>
            <input type="text" id="emailSignupFirstName" name="firstName" ref={register({ required: true })} />

            <label htmlFor="emailSignupEmail">Email Address</label>
            <input type="text" id="emailSignupEmail" name="email" ref={register({ required: true })} />

            <ButtonSubmit className="with-emoji mb-8 mt-8">
              {buttonLabel || (
                <>
                  <span role="img" aria-label="raise hand" className="-left-20 -top-8 text-7xl">
                    🙋‍♀️
                  </span>
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

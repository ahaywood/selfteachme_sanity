import Link from "next/link";
import { Icon } from "modules/shared/components/icon";

const ThreeUp = () => {
  return (
    <div className="container mx-auto my-24">
      <ol className="three-up">
        <li>
          <h3>Not sure where to start?</h3>
          <p>
            You want to learn, but there’s so many languages and so many tools.
          </p>
          <Link href="/plan">
            <a>
              <Icon name="arrow" />
              Get a plan
            </a>
          </Link>
        </li>

        <li>
          <h3>Know just enough CSS to be Dangerous?</h3>
          <p>
            You’ve dabbled in this and that, but want confidence. Intimidation
            no more!
          </p>
          <Link href="/css-advanced-beginner">
            <a>
              <Icon name="arrow" /> I need this!
            </a>
          </Link>
        </li>
        <li>
          <h3>Build the application you've always wanted</h3>
          <p>
            Plan, code, and market your own web application. Create the software
            as a service you’ve always wanted, without the overwhelm.
          </p>
          <Link href="/app-from-scratch">
            <a>
              <Icon name="arrow" />
              Yes, count me in!
            </a>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export { ThreeUp };

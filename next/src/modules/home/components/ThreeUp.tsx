import Link from 'next/link';
import { Icon } from 'modules/shared/components/icon';

const ThreeUp = () => (
  <div className="max-w-screen-sm lg:max-w-max mx-auto my-12 md:my-20 lg:my-24 px-4">
    <ol className="three-up">
      <li>
        <h3>Just getting started?</h3>
        <p>You want to learn, but there’s so many languages and so many tools.</p>
        <a href="https://selfteachme.ck.page/621ac7c092" target="_blank">
          <Icon name="arrow" />
          Get a plan
        </a>
      </li>

      <li>
        <h3>Know just enough CSS to be Dangerous?</h3>
        <p>You’ve dabbled in this and that, but want confidence. Intimidation no more!</p>
        <a href="https://selfteachme.ck.page/33458e4380" target="_blank">
          <Icon name="arrow" /> I need this!
        </a>
      </li>
      <li>
        <h3>Build the application you've always wanted</h3>
        <p>
          Plan, code, and market your own web application. Create the software as a service you’ve always wanted,
          without the overwhelm.
        </p>
        <a href="https://selfteachme.ck.page/4f22b6ebd5" target="_blank">
          <Icon name="arrow" />
          Yes, count me in!
        </a>
      </li>
    </ol>
  </div>
);

export { ThreeUp };

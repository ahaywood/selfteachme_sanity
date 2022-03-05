import { slugify } from 'utils/slugify';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const H2 = ({ children }: Props): JSX.Element => (
  <div className="h2 relative col-span-12 col-start-1 md:col-start-4 md:col-span-6 px-8 md:px-0 mt-8">
    <div className="absolute left-0 md:-left-10 font-sans -top-1 text-5xl font-bold" id={`${slugify(children)}`}>
      <a className=" text-baliHai opacity-30 hover:text-brightPink hover:opacity-100" href={`#${slugify(children)}`}>
        #
      </a>
    </div>
    <h2 className="font-condensed text-baliHai text-5xl">{children}</h2>
  </div>
);
export { H2 };

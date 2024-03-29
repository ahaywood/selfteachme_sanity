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
const H1 = ({ children }: Props): JSX.Element => (
  <div className="h1 relative col-span-12 md:col-start-4 md:col-span-6 px-8 md:px-0">
    <div className="absolute -left-12 md:-left-14 font-sans -top-1 text-7xl font-bold" id={`${slugify(children)}`}>
      <a className=" text-baliHai opacity-30 hover:text-brightPink hover:opacity-100" href={`#${slugify(children)}`}>
        #
      </a>
    </div>
    <h1 className="font-condensed text-black text-7xl">{children}</h1>
  </div>
);

export { H1 };
